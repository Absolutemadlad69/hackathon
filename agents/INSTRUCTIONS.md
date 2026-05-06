# PeopleHub — Development Instructions

## 📌 Overview

This document outlines the standard workflow for resolving bugs and implementing features in the PeopleHub HR Portal. All changes are driven by **JIRA tickets** and follow a branch-based Git workflow with pull requests.

---

## 🐛 Bug Fix Workflow

### When you receive a Bug ticket (e.g., `BUG-001`):

#### Step 1 — Read the JIRA Ticket
- Open the JIRA ticket or use the Atlassian MCP server to read the ticket details
- Understand the **Description**, **Steps to Reproduce**, and **Expected vs Actual Behavior**
- Review the **Acceptance Criteria** to know what "done" looks like

#### Step 2 — Create a Branch
```bash
git checkout main
git pull origin main
git checkout -b bugfix/<JIRA-TICKET-ID>-<short-description>
```

**Naming Convention:**
```
bugfix/BUG-001-fix-onleave-count
bugfix/BUG-002-fix-leave-approval
```

#### Step 3 — Reproduce the Bug
- Open the portal in a browser (`index.html` or `http://localhost:8090`)
- Follow the **Steps to Reproduce** exactly as written in the ticket
- Confirm the bug exists before making any changes
- Check the browser console for errors if applicable

#### Step 4 — Implement the Fix
- Make the **minimal, targeted fix** — don't refactor unrelated code
- Add comments explaining the fix if the root cause was non-obvious
- Ensure the fix doesn't break other functionality

#### Step 5 — Verify the Fix
- Follow the **Steps to Reproduce** again — the bug should no longer occur
- Check all items in the **Acceptance Criteria**
- Test adjacent functionality to ensure no regressions
- Check the browser console for any new errors

#### Step 6 — Commit & Push
```bash
git add .
git commit -m "fix(<component>): <short description> [BUG-XXX]"
git push origin bugfix/<JIRA-TICKET-ID>-<short-description>
```

**Commit Message Convention:**
```
fix(dashboard): correct on-leave count filter condition [BUG-001]
fix(leave): fix variable typo in approval handler [BUG-002]
```

#### Step 7 — Create a Pull Request
- Use the **PR template** (`.github/PULL_REQUEST_TEMPLATE.md`)
- Link the JIRA ticket in the PR description
- Request review and merge

---

## ✨ Feature Implementation Workflow

### When you receive a Feature ticket (e.g., `FEATURE-001`):

#### Step 1 — Read the JIRA Ticket
- Open the JIRA ticket or use the Atlassian MCP server to read the ticket details
- Understand the **User Story**, **Requirements**, and **Design Specification** (if any)
- Review the **Acceptance Criteria** to know what "done" looks like

#### Step 2 — Create a Branch
```bash
git checkout main
git pull origin main
git checkout -b feature/<JIRA-TICKET-ID>-<short-description>
```

**Naming Convention:**
```
feature/FEATURE-001-employee-search
feature/FEATURE-002-department-badges
```

#### Step 3 — Understand Current State
- Read the **Current State** section of the ticket
- Identify which files need modification
- Check if any partial implementation already exists

#### Step 4 — Implement the Feature
- Follow the **Requirements** and **Design Specification** from the ticket
- Keep changes focused on the feature scope — don't add extras
- Ensure the implementation matches all acceptance criteria

#### Step 5 — Verify the Feature
- Test every item in the **Acceptance Criteria**
- Test edge cases (empty states, long text, special characters)
- Ensure the feature works across different pages if applicable
- Check the browser console for any errors

#### Step 6 — Commit & Push
```bash
git add .
git commit -m "feat(<component>): <short description> [FEATURE-XXX]"
git push origin feature/<JIRA-TICKET-ID>-<short-description>
```

**Commit Message Convention:**
```
feat(search): implement employee search functionality [FEATURE-001]
feat(ui): add department color-coded badges [FEATURE-002]
```

#### Step 7 — Create a Pull Request
- Use the **PR template** (`.github/PULL_REQUEST_TEMPLATE.md`)
- Link the JIRA ticket in the PR description
- Include screenshots if the feature has UI changes
- Request review and merge

---

## 📏 Branching Strategy

```
main
 ├── bugfix/BUG-001-fix-onleave-count
 ├── bugfix/BUG-002-fix-leave-approval
 ├── feature/FEATURE-001-employee-search
 └── feature/FEATURE-002-department-badges
```

| Branch Type | Prefix      | Example                                  |
|-------------|-------------|------------------------------------------|
| Bug Fix     | `bugfix/`   | `bugfix/BUG-001-fix-onleave-count`       |
| Feature     | `feature/`  | `feature/FEATURE-001-employee-search`    |

---

## 📝 Commit Message Format

```
<type>(<scope>): <description> [<TICKET-ID>]
```

| Type   | When to Use                    |
|--------|--------------------------------|
| `fix`  | Bug fix                        |
| `feat` | New feature or enhancement     |
| `docs` | Documentation changes          |
| `style`| CSS/formatting changes         |
| `refactor` | Code refactoring (no behavior change) |

---

## ✅ Definition of Done

A ticket is considered **done** when:

1. ✅ All **Acceptance Criteria** are met
2. ✅ The fix/feature is verified in the browser
3. ✅ No regressions — existing functionality still works
4. ✅ No console errors or warnings
5. ✅ Code is committed with proper commit message format
6. ✅ Pull request is created using the PR template
7. ✅ PR is reviewed and merged to `main`
8. ✅ JIRA ticket status is updated to **Done**
