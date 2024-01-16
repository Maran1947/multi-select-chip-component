# Mutli Select Chip Component
Tech stack: Nextjs, TypeScript, and TailwindCSS.

## 🚀 Feature

- __Show List of Items__: 
    - When the input field is clicked, a list of items appears.
- __Filter Items__: 
    - As the user types in the input field, the list of items should dynamically filter to show only those that match the input.
- __Select Item__: 
    - Clicking on an item in the list turns it into a chip at the top. 
- __Automatic Adjustment__: 
    - The input field should automatically adjust as items are selected, ensuring a seamless user experience.
- __Remove from List__: 
    - Once an item becomes a chip, it should be removed from the list to avoid duplication.
- __Chip Removal__: 
    - Each chip has an "X" icon, and clicking it removes the chip.
- __Clean Code__: 
    - Code should be well-organized, readable, and follow best practices for maintainability.
- __TypeScript__: 
    - Utilize TypeScript for type safety and enhanced development experience.
- __Backspace Behavior__: 
    - When the input is blank, and the user presses backspace, the last chip should get highlighted.
    - Pressing backspace again should delete the highlighted chip.
- __Up/Down Arrow Navigation__: 
    - While the input field is in focus and the list is open, users can navigate through the list using the up and down arrow keys.
    - Highlighted item should change accordingly as the user navigates through the list.
- __Enter key Selection__: 
    - Pressing the Enter key when an item is highlighted in the list or when typing in the input field should select the item and turn it into a chip

## ⚙ Installation

Follow these steps to set up Repo locally:

1. Clone the repository: 
```
git clone https://github.com/Maran1947/multi-select-chip-component.git
```

2. Install the required dependencies:
```
cd multi-select-chip-component
npm install
```


3. Start the server:
```
npm run dev 
```

5. Access server in your web browser at `http://localhost:3000`.