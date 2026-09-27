# odin-calculator

This project is a web-based calculator built as part of The Odin Project curriculum.

https://protokol42.github.io/odin-calculator/

## Core Concepts Practiced

### JavaScript Foundations

- **State Management:** Tracking operands, active operations, and display reset flags to handle multi-step arithmetic workflows.
- **Functional Decomposition:** Isolating core mathematical logic into specialized functions (`add`, `subtract`, `multiply`, `divide`) orchestrated by an `operate` handler.
- **Floating-Point Handling:** Managing precision issues using rounding logic and preventing multiple decimal points from being entered into a single operand.

### Logic and Control Flow

- **Sequential Evaluation:** Executing pending calculations automatically when chaining multiple operators before pressing equals.
- **Edge Case Handling:** Catching division-by-zero errors gracefully and preventing invalid inputs from corrupting application state.
- **Dual Input Streams:** Binding both mouse clicks and keyboard event listeners to trigger unified calculator actions.

### User Experience and Layout

- **Flexbox grid layout:** Structuring a multi-row, 4-column keypad using CSS Flexbox wrapping and dynamic dimension calculations.
- **Historical Context:** Maintaining an active history sub-display alongside the primary value output for clear visual feedback.
- **State Reset and Truncation:** Providing clear (`AC`) and character deletion (`DEL`) controls alongside text overflow constraints.

## Technologies Used

- **HTML5:** Providing semantic structure for the calculator frame, display areas, and input keypad.
- **JavaScript:** Powering arithmetic evaluation, event handling, and input state control.
- **CSS:** Styling the interface and assembling the multi-row button keypad using Flexbox.
