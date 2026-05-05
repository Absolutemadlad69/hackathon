# FEATURE-001: Implement employee search functionality

## Ticket Details

| Field       | Value                                      |
|-------------|---------------------------------------------|
| **Type**    | ✨ Feature / Story                          |
| **Priority**| Medium                                      |
| **Component** | Employee Directory / Global Search        |
| **Reporter** | Priya Sharma (Product Manager)              |
| **Assignee** | Unassigned                                 |

## Description

The search bar in the header of PeopleHub is **completely non-functional**. Users expect to be able to type an employee name, role, or department and see filtered results, but the input field does nothing when text is entered.

This is a core usability feature — with 12+ employees (and growing), users need a way to quickly find people.

## User Story

**As an** HR administrator,  
**I want** to search for employees by name, role, or department,  
**So that** I can quickly find the person I'm looking for without scrolling through the entire directory.

## Requirements

1. The search bar in the header (`#global-search`) should filter the **Employee Directory** page in real-time as the user types
2. The search should match against:
   - Employee name
   - Role / Job title
   - Department
3. Non-matching employee cards should be hidden
4. When the search input is cleared, all employees should be shown again
5. The search should be case-insensitive

## Current State

- The search input (`<input id="global-search">`) exists in the HTML
- The filtering logic (`setupSearch()` and `filterEmployees()`) is **already written** in `js/app.js`
- However, `setupSearch()` is **never called** during initialization — it's commented out in `initApp()`

## Acceptance Criteria

- [ ] Typing in the search bar filters the employee directory in real-time
- [ ] Search matches employee name, role, and department
- [ ] Clearing the search shows all employees again
- [ ] Search is case-insensitive
- [ ] The page automatically switches to the Employee Directory when searching
