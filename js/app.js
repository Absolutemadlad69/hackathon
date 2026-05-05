// =====================================================
// PeopleHub — Application Logic
// =====================================================
// NOTE: This file contains intentional bugs for the
// JIRA MCP integration demo. See jira-tickets/ for details.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderDashboardStats();
  renderEmployeeList();
  renderLeaveRequests();
  renderAnnouncements();
  renderDirectoryPage();
  renderLeavePageStats();
  renderLeavePageTable();
  setupNavigation();

  // BUG (TICKET-003): Search input exists but no event listener is attached.
  // The search bar is completely non-functional — no filtering logic is wired up.
  // setupSearch();  <-- This was never called
}

// =====================================================
// Navigation
// =====================================================

function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item[data-page]");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      switchPage(page);

      // Update active state
      navItems.forEach((n) => n.classList.remove("active"));
      item.classList.add("active");

      // Update header title
      const pageTitle = item.querySelector(".label").textContent;
      document.getElementById("page-title").textContent = pageTitle;
    });
  });
}

function switchPage(pageId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active");
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
  }
}

// =====================================================
// Dashboard Stats
// =====================================================

function renderDashboardStats() {
  const totalEmployees = employees.length;

  // BUG (TICKET-001): This filters by "leave" instead of "on-leave".
  // The employee status field uses "on-leave" but we're checking for "leave",
  // so this will always return 0.
  const onLeave = employees.filter((e) => e.status === "leave").length;

  const activeEmployees = employees.filter(
    (e) => e.status === "active"
  ).length;
  const pendingRequests = leaveRequests.filter(
    (r) => r.status === "pending"
  ).length;

  document.getElementById("stat-total-employees").textContent = totalEmployees;
  document.getElementById("stat-on-leave").textContent = onLeave;
  document.getElementById("stat-active").textContent = activeEmployees;
  document.getElementById("stat-pending-requests").textContent =
    pendingRequests;
}

// =====================================================
// Employee List (Dashboard sidebar)
// =====================================================

function getAvatarColor(name) {
  const colors = [
    "#6c5ce7",
    "#00cec9",
    "#e17055",
    "#00b894",
    "#fdcb6e",
    "#74b9ff",
    "#a29bfe",
    "#fab1a0",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function renderEmployeeList() {
  const container = document.getElementById("employee-list");
  if (!container) return;

  const html = employees
    .slice(0, 6)
    .map(
      (emp) => `
    <div class="employee-row">
      <div class="emp-avatar" style="background: ${getAvatarColor(emp.name)}">
        ${getInitials(emp.name)}
      </div>
      <div class="emp-info">
        <div class="emp-name">${emp.name}</div>
        <div class="emp-role">${emp.role}</div>
      </div>
      <span class="emp-department">${emp.department}</span>
      <div class="emp-status ${emp.status}"></div>
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

// =====================================================
// Leave Requests (Dashboard)
// =====================================================

function renderLeaveRequests() {
  const container = document.getElementById("leave-requests");
  if (!container) return;

  const html = leaveRequests
    .map(
      (req) => `
    <div class="leave-row" data-id="${req.id}">
      <div class="leave-emp">
        <div class="leave-emp-name">${req.employeeName}</div>
        <div class="leave-type">${req.type}</div>
      </div>
      <div class="leave-dates">${formatDate(req.startDate)} — ${formatDate(req.endDate)}</div>
      <span class="leave-status ${req.status}">${req.status}</span>
      ${
        req.status === "pending"
          ? `
        <div class="leave-actions">
          <button class="btn-approve" onclick="approveLeave('${req.id}')">Approve</button>
          <button class="btn-reject" onclick="rejectLeave('${req.id}')">Reject</button>
        </div>
      `
          : ""
      }
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

// =====================================================
// Leave Approval / Rejection
// =====================================================

function approveLeave(requestId) {
  // BUG (TICKET-002): Variable name typo — `reqeustId` instead of `requestId`.
  // This means the find() never matches and the status is never updated.
  const request = leaveRequests.find((r) => r.id === reqeustId);
  if (request) {
    request.status = "approved";
    renderLeaveRequests();
    renderDashboardStats();
    renderLeavePageTable();
  }
}

function rejectLeave(requestId) {
  // Same bug pattern as approveLeave for consistency
  const request = leaveRequests.find((r) => r.id === reqeustId);
  if (request) {
    request.status = "rejected";
    renderLeaveRequests();
    renderDashboardStats();
    renderLeavePageTable();
  }
}

// =====================================================
// Announcements
// =====================================================

function renderAnnouncements() {
  const container = document.getElementById("announcements");
  if (!container) return;

  const html = announcements
    .map(
      (ann) => `
    <div class="announcement-item">
      <div class="ann-header">
        <div class="ann-title">
          <span class="ann-priority ${ann.priority}"></span>
          ${ann.title}
        </div>
        <span class="ann-date">${formatDate(ann.date)}</span>
      </div>
      <div class="ann-message">${ann.message}</div>
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

// =====================================================
// Employee Directory (Full Page)
// =====================================================

function renderDirectoryPage() {
  const container = document.getElementById("directory-grid");
  if (!container) return;

  const html = employees
    .map(
      (emp) => `
    <div class="emp-card">
      <div class="emp-card-header">
        <div class="emp-card-avatar" style="background: ${getAvatarColor(emp.name)}">
          ${getInitials(emp.name)}
        </div>
        <div>
          <div class="emp-card-name">${emp.name}</div>
          <div class="emp-card-role">${emp.role}</div>
        </div>
      </div>
      <div class="emp-card-details">
        <div class="emp-detail">
          <span class="detail-icon">📧</span>
          ${emp.email}
        </div>
        <div class="emp-detail">
          <span class="detail-icon">📞</span>
          ${emp.phone}
        </div>
        <div class="emp-detail">
          <span class="detail-icon">📍</span>
          ${emp.location}
        </div>
        <div class="emp-detail">
          <span class="detail-icon">🏢</span>
          <span class="emp-department">${emp.department}</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

// =====================================================
// Leave Page (Full Page)
// =====================================================

function renderLeavePageStats() {
  const approved = leaveRequests.filter(
    (r) => r.status === "approved"
  ).length;
  const pending = leaveRequests.filter(
    (r) => r.status === "pending"
  ).length;
  const rejected = leaveRequests.filter(
    (r) => r.status === "rejected"
  ).length;

  const el = (id) => document.getElementById(id);
  if (el("leave-approved-count")) el("leave-approved-count").textContent = approved;
  if (el("leave-pending-count")) el("leave-pending-count").textContent = pending;
  if (el("leave-rejected-count")) el("leave-rejected-count").textContent = rejected;
}

function renderLeavePageTable() {
  const container = document.getElementById("leave-page-requests");
  if (!container) return;

  const html = leaveRequests
    .map(
      (req) => `
    <div class="leave-row" data-id="${req.id}">
      <div class="leave-emp">
        <div class="leave-emp-name">${req.employeeName}</div>
        <div class="leave-type">${req.type} · ${req.reason}</div>
      </div>
      <div class="leave-dates">${formatDate(req.startDate)} — ${formatDate(req.endDate)}</div>
      <span class="leave-status ${req.status}">${req.status}</span>
      ${
        req.status === "pending"
          ? `
        <div class="leave-actions">
          <button class="btn-approve" onclick="approveLeave('${req.id}')">Approve</button>
          <button class="btn-reject" onclick="rejectLeave('${req.id}')">Reject</button>
        </div>
      `
          : ""
      }
    </div>
  `
    )
    .join("");

  container.innerHTML = html;
}

// =====================================================
// Search (INTENTIONALLY NOT IMPLEMENTED — TICKET-003)
// =====================================================

// This function exists but is never called from initApp().
// The search bar in the header is purely decorative.
function setupSearch() {
  const searchInput = document.getElementById("global-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterEmployees(query);
  });
}

function filterEmployees(query) {
  const cards = document.querySelectorAll(".emp-card");
  cards.forEach((card) => {
    const name = card
      .querySelector(".emp-card-name")
      .textContent.toLowerCase();
    const role = card
      .querySelector(".emp-card-role")
      .textContent.toLowerCase();
    const match = name.includes(query) || role.includes(query);
    card.style.display = match ? "" : "none";
  });
}

// =====================================================
// Utilities
// =====================================================

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
