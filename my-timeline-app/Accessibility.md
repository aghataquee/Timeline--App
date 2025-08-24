# Accessibility Improvements

## Modal Dialog
- Added `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby`.
- Focus is trapped inside modal.
- Modal is closable using `Esc`.
- Focus is restored to the previously focused element on modal close.

## Timeline Navigation
- Each `EventMarker` is reachable via `Tab`.
- Users can navigate left/right using arrow keys.
- Active year can use `aria-current="true"`.

## Keyboard Access
- All interactive elements are keyboard accessible.
- Close buttons have `aria-label`.

## Color Contrast
- Text and background colors meet WCAG AA contrast ratio (≥ 4.5:1).

## General
- Buttons and interactive elements have clear visual focus outlines.
- All images have `alt` text.
## CSS Updated