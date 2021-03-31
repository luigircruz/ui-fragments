# UI Fragments

A minimal component UI library that you can easily pull into your React projects.

## Installation 

On your React project:

```sh
# NPM
npm install ui-fragments

# Yarn
yarn add ui-fragments
```

## Components

_This project is still in early development. New components will be added regularly over the coming months._

- Button

**Example:**

Import ui-fragments then add the button to your component:

```javascript
import { Button } from 'ui-fragments'

export default function MyComponent() {
  return (
    <div>
      <div>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
        <Button size='xl'>Extra Large</Button>
      </div>
      <div>
        <Button appearance='primary' size='sm'>Small</Button>
        <Button appearance='primary' size='md'>Medium</Button>
        <Button appearance='primary' size='lg'>Large</Button>
        <Button appearance='primary' size='xl'>Extra Large</Button>
      </div>
    <div/>
  )
}
```

## Roadmap

Main objective of this project build a utility React UI components that can be easily extended so that you can build your Design System. The project is still in early development but the plan is to add more components in the coming months such as:

- Accordion
- Alert
- Checkbox
- Radiobox
- Combobox
- Modal
- Listbox
- Switch
- Tabs

...and more

## Contributing

If you're interested in contributing to UI Fragments, please read our [contributing docs](https://github.com/luigircruz/ui-fragments/blob/main/CONTRIBUTING.md) **before submitting a pull request**.