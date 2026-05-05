# BUG-001: Dashboard "On Leave Today" count always shows 0

## Ticket Details

| Field       | Value                                      |
|-------------|---------------------------------------------|
| **Type**    | 🐛 Bug                                     |
| **Priority**| High                                        |
| **Component** | Dashboard / Stats                        |
| **Reporter** | Admin Kumar                                |
| **Assignee** | Unassigned                                 |

## Description

The "On Leave Today" stat card on the main dashboard always displays **0**, even though there are employees currently on leave. The employee data clearly has employees with `status: "on-leave"`, and the leave requests confirm 3 employees are on approved leave today.

## Steps to Reproduce

1. Open the PeopleHub HR Portal (`index.html`)
2. Look at the dashboard stats cards at the top
3. Observe the **"On Leave Today"** card — it shows **0**
4. Check the **Team Members** list on the right — you can see yellow status dots indicating employees on leave
5. Navigate to **Leave Management** — 3 approved leave requests exist for today

## Expected Behavior

The "On Leave Today" stat card should show **3** (matching the number of employees whose status is `"on-leave"`).

## Actual Behavior

The "On Leave Today" stat card shows **0**.

## Root Cause Hint

The bug is in `js/app.js` in the `renderDashboardStats()` function. The filter condition checks for the wrong status string.

## Acceptance Criteria

- [ ] The "On Leave Today" counter accurately reflects the number of employees with `status: "on-leave"`
- [ ] The count updates dynamically when leave requests are approved/rejected
- [ ] No other stat cards are affected by the fix
