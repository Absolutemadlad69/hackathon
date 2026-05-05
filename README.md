# PeopleHub — HR Management Portal

> **Hackathon Demo**: End-to-end JIRA ↔ MCP ↔ GitHub AI-driven development workflow

## 🚀 What is this?

**PeopleHub** is an HR management portal built to demonstrate the power of **Atlassian JIRA MCP (Model Context Protocol)** integration with **GitHub** and **AI coding agents**.

The portal has **intentional bugs and missing features** that are tracked as JIRA tickets. The AI agent reads the JIRA ticket via MCP, understands the requirements, and implements the fix — all end-to-end.

## 🏗️ Architecture

```
┌─────────────────┐        ┌──────────────┐        ┌───────────────────┐
│  JIRA Board     │───────▶│  MCP Server  │───────▶│  AI Coding Agent  │
│  (Bug Tickets)  │        │  (Atlassian) │        │  Reads & Fixes    │
└─────────────────┘        └──────────────┘        └────────┬──────────┘
                                                            │
                                                            ▼
                                                   ┌───────────────────┐
                                                   │  GitHub Repo      │
                                                   │  Commit + PR      │
                                                   └───────────────────┘
```

## 📋 JIRA Tickets

| Ticket ID    | Type          | Summary                                          | Status  |
|-------------|---------------|--------------------------------------------------|---------|
| BUG-001     | 🐛 Bug        | Dashboard "On Leave Today" count always shows 0   | Open    |
| BUG-002     | 🐛 Bug        | Leave approval button doesn't update status        | Open    |
| FEATURE-001 | ✨ Feature     | Employee search bar is non-functional              | Open    |
| FEATURE-002 | ✨ Feature     | Add department color-coded badges                 | Open    |

> **Note**: Replace these IDs with your actual JIRA ticket IDs after creating them in your JIRA project.

## 🎯 Demo Flow

### Step 1: See the Bugs
Open `index.html` in your browser and observe:
- ❌ "On Leave Today" shows 0 (should be 3)
- ❌ Clicking Approve/Reject on leave requests does nothing
- ❌ Search bar doesn't filter employees
- ❌ Department badges are all plain gray (no color coding)

### Step 2: Create JIRA Tickets
Copy the content from `jira-tickets/` folder into your JIRA project. Each markdown file has a ready-to-use ticket description.

### Step 3: Reference JIRA Ticket → AI Fixes It
Tell the AI agent a JIRA ticket ID. It reads the ticket via MCP, understands the bug/requirement, and implements the fix on a **new branch**.

### Step 4: PR & Merge
The AI creates a pull request using the PR template. Review, approve, and merge.

### Step 5: Verify the Fix
Refresh the browser and verify the fix works as described in the acceptance criteria.

## 📖 Development Workflow

See [INSTRUCTIONS.md](INSTRUCTIONS.md) for the complete development workflow including:
- 🐛 Bug fix workflow (step-by-step)
- ✨ Feature implementation workflow (step-by-step)
- 📏 Branching strategy (`bugfix/BUG-XXX`, `feature/FEATURE-XXX`)
- 📝 Commit message conventions
- ✅ Definition of done

## 🗂️ Project Structure

```
├── index.html                              # Main HR portal page
├── css/
│   └── styles.css                          # Design system & styling
├── js/
│   ├── data.js                             # Mock employee & leave data
│   └── app.js                              # Application logic (has bugs!)
├── jira-tickets/
│   ├── BUG-001-onleave-count.md            # Bug: wrong on-leave count
│   ├── BUG-002-leave-approval.md           # Bug: approval button broken
│   ├── FEATURE-001-search.md               # Feature: search not working
│   └── FEATURE-002-department-badges.md    # Feature: color badges
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md            # PR template for all changes
├── INSTRUCTIONS.md                         # Development workflow guide
└── README.md                               # This file
```

## 💻 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — dark glassmorphism theme with micro-animations
- **Vanilla JavaScript** — zero dependencies
- **JIRA + MCP** — AI-driven ticket resolution
- **GitHub** — version control & collaboration

## 🏃 Running Locally

Simply open `index.html` in any modern browser — no build step or server required.

```bash
# Or use a local server
npx serve .
```

## 🔧 MCP Server Configuration

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp"
    },
    "atlassian": {
      "type": "http",
      "url": "<YOUR_ATLASSIAN_MCP_URL>",
      "headers": {
        "Authorization": "Bearer <YOUR_API_TOKEN>"
      }
    }
  }
}
```