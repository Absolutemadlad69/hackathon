# FEATURE-002: Add color-coded department badges for employees

## Ticket Details

| Field       | Value                                      |
|-------------|---------------------------------------------|
| **Type**    | 🔧 Enhancement / Feature                    |
| **Priority**| Low                                         |
| **Component** | Employee Directory / UI                   |
| **Reporter** | Ravi Kumar (UX Designer)                    |
| **Assignee** | Unassigned                                 |

## Description

Currently, department names in the employee list and employee directory cards are displayed as **plain gray text** with a generic background. This makes it hard to visually scan and identify employees by department.

We need **color-coded department badges** so that each department has a distinct, recognizable color. This will significantly improve the visual hierarchy and make the portal more scannable.

## Design Specification

Each department should have a unique color scheme for its badge:

| Department       | Badge Color     | Text Color       |
|-----------------|-----------------|------------------|
| Engineering     | `rgba(108, 92, 231, 0.15)` | `#a29bfe` (purple) |
| Product         | `rgba(0, 206, 201, 0.15)` | `#00cec9` (teal) |
| Design          | `rgba(253, 203, 110, 0.15)` | `#fdcb6e` (yellow) |
| Marketing       | `rgba(225, 112, 85, 0.15)` | `#e17055` (coral) |
| Human Resources | `rgba(116, 185, 255, 0.15)` | `#74b9ff` (blue) |
| Finance         | `rgba(0, 184, 148, 0.15)` | `#00b894` (green) |
| Sales           | `rgba(162, 155, 254, 0.15)` | `#a29bfe` (lavender) |
| Operations      | `rgba(250, 177, 160, 0.15)` | `#fab1a0` (peach) |

## Current State

- The `department` field exists in the employee data (`js/data.js`)
- Department names are rendered in `<span class="emp-department">` elements
- **No color-coding logic exists** — all badges use the same generic `var(--bg-glass)` background and `var(--text-secondary)` color
- The CSS class `.emp-department` in `css/styles.css` has a comment noting this is intentionally missing

## Requirements

1. Add a JavaScript function that maps department names to their respective colors
2. Apply the colors dynamically when rendering employee rows and employee cards
3. The badges should have a semi-transparent background with matching text color (as per the design spec above)
4. Apply to both the **Dashboard team list** and the **Employee Directory page**

## Acceptance Criteria

- [ ] Each department has a unique, visually distinct badge color
- [ ] Colors are applied consistently across dashboard and directory views
- [ ] Badge colors follow the design specification above
- [ ] Unknown departments fall back to the default gray style
- [ ] No hardcoded styles — colors should be applied via JavaScript dynamically
