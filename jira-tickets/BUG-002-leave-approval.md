# BUG-002: Leave approval button does not update request status

## Ticket Details

| Field       | Value                                      |
|-------------|---------------------------------------------|
| **Type**    | 🐛 Bug                                     |
| **Priority**| Critical                                    |
| **Component** | Leave Management                          |
| **Reporter** | Admin Kumar                                |
| **Assignee** | Unassigned                                 |

## Description

When clicking the **"Approve"** or **"Reject"** buttons on pending leave requests, nothing happens. The buttons appear to be clickable and the UI responds to hover states, but the leave request status remains **"pending"** and never changes.

This is a critical bug because HR administrators cannot process any leave requests, blocking the entire approval workflow.

## Steps to Reproduce

1. Open the PeopleHub HR Portal (`index.html`)
2. On the Dashboard, find a leave request with status **"Pending"** (e.g., Arjun Mehta's WFH request)
3. Click the **"Approve"** button
4. Observe that nothing changes — the status remains "pending"
5. Check the browser console — you should see a `ReferenceError`

## Expected Behavior

- Clicking "Approve" should change the leave request status to **"approved"** (green badge)
- Clicking "Reject" should change the status to **"rejected"** (red badge)
- The approve/reject buttons should disappear after action is taken
- Dashboard stats should update accordingly

## Actual Behavior

- Nothing happens when buttons are clicked
- The leave request status stays as "pending"
- A `ReferenceError` appears in the browser console

## Root Cause Hint

The bug is in `js/app.js` in the `approveLeave()` and `rejectLeave()` functions. There is a typo in the variable name used inside the function body.

## Acceptance Criteria

- [ ] Clicking "Approve" changes the leave request status to "approved"
- [ ] Clicking "Reject" changes the leave request status to "rejected"
- [ ] The UI re-renders correctly after status change
- [ ] Dashboard stats (pending count) update after approval/rejection
- [ ] Both dashboard and leave management page reflect the changes
