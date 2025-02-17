# Custom-components-lib

## 📌 Task

[Task link](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view)

## 📦 Installation

```sh
npm i @lexasby/custom-components-lib
```

## 🚀 Usage

Import and use the components:

```tsx
import { Button, Checkbox, Modal, Select, Switch, TextField } from '@lexasby/custom-components-lib';

function App() {
  return (
    <>
      <Button variant="contained">Click me</Button>
      <Checkbox label="Accept terms" />
      <Select options={['Option 1', 'Option 2']} />
      <TextField placeholder="Enter text" />
      <Switch checked={true} />
      <Modal open={true} onClose={() => {}}>
        <p>Modal content</p>
      </Modal>
    </>
  );
}

export default App;
```

## 📌 Available Components

### Button

**Description:** A button component with different style variants.  
**Props:**

- `variant`: "text" | "contained" | "outlined" (default `contained`)
- `size`: "small" | "medium" | "large"
- `disabled`: boolean
- `onClick`: () => void

### Checkbox

**Description:** A checkbox with a label.  
**Props:**

- `label`: string
- `checked`: boolean
- `onChange`: (checked: boolean) => void

### Select

**Description:** A dropdown select component.  
**Props:**

- `options`: string[] — array of options
- `value`: string — currently selected value
- `onChange`: (value: string) => void

### TextField

**Description:** A text input field.  
**Props:**

- `placeholder`: string
- `value`: string
- `onChange`: (value: string) => void
- `error`: boolean (displays error state)

### Switch

**Description:** A toggle switch.  
**Props:**

- `checked`: boolean
- `onChange`: (checked: boolean) => void
- `disabled`: boolean

### Modal

**Description:** A modal dialog component.  
**Props:**

- `open`: boolean
- `onClose`: () => void
- `children`: ReactNode

## 🛠 Technologies

- React
- TypeScript
- SCSS Modules

## 📝 License

MIT License
