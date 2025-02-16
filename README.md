# @quickat/ui
A customizable UI component library built with TypeScript and Tailwind CSS, featuring Input Field, Checkbox, Button, Modal Box, and Badge components.
## Features
- 🔹 Fully Customizable: Easily style and configure each component with Tailwind CSS.
- 🚀 Lightweight & Fast: Optimized for performance with minimal dependencies.
- 🎨 Theme-Friendly: Works seamlessly with your existing Tailwind theme.
- 🔄 Reusable Components: Designed for flexibility and reusability across projects.
- ⚡ TypeScript Support: Strongly typed components for better developer experience.
- 📦 Modular & Scalable: Use only the components you need.
- 🌐 Responsive & Accessible: Built with accessibility and responsiveness in mind.

## Installation
```sh
npm install @quickat/ui
```
### Add Stylings

In the `tailwind.config.js` file, adjust the `content` array to include the `@quickat/ui/dist/global.css` file.

```javascript
module.exports = {
    content: [
        // ...content
        "./node_modules/@quickat/ui/dist/**/*.js"
    ]
}
```

## Requirements
- **React**: ```v18.0.0 or later```
- **Tailwind CSS**: ```v3.0.0 or later```
- **Other Dependencies**:
  - **lodash**: ```>=4.17.21```
  - **lucide-react**: ```>=0.475.0```
## Components
### **```All components are fully customizable using Tailwind CSS and props.```**

| Component      | Description                                       |
| -------------- | ------------------------------------------------- |
| **InputField** | Customizable input field with inbuilt toggles for edit and password.   |
| **ClickButtton** | Customizable button with 34 different varients.             |
| **MonoTixBox** | Single checkbox component.             |
| **TixBox**     | Multi checkbox group component where you can customize multi select or single select.            |
| **ModalBox**   | Modal component with title, content, and actions. |
| **Badge**      | Badge component for labels and notifications.     |

## Component Props

### InputField
| Prop Name                  | Type                                              | Description                                        | Default |
|----------------------------|--------------------------------------------------|----------------------------------------------------|---------|
| `type`                     | text \| password \| email \| date \| month \| tel \| number \| hidden                                           | Specifies the input type.                         | `"text"` |
| `label`                    | string                                        | Label for the input field.                        | `""` |
| `description`              | string                                         | Additional description below the label.           | `""` |
| `verified`                 | boolean \| none                              | Shows a verification indicator.                   | `"none"` |
| `editable`                 | boolean                                        | Determines if the input is editable.              | `true` |
| `errorMessage`             | string                                        | Displays an error message.                        | `""` |
| `mainContainerStyles_fi`   | string                                        | Custom styles for the main container.             | `""` |
| `infoContainerStyles_fi`   | string                                        | Custom styles for the info container.             | `""` |
| `labelStyles_fi`           | string                                        | Custom styles for the label.                      | `""` |
| `descriptionStyles_fi`     | string                                       | Custom styles for the description.                | `""` |
| `inputStyles_fi`           | string                                       | Custom styles for the input field.                | `""` |
| `errorStyles_fi`           | string                                        | Custom styles for the error message.              | `""` |

### ClickButton
| Prop Name   | Type     | Description                    | Default |
|------------|---------|--------------------------------|---------|
| `label` | string | Badge text content. | `"Click"` |
| `variant` | default \| alternative \| dark \| light \| green \| red \| yellow \| purple \| gradient-blue \| gradient-green \| gradient-cyan \| gradient-teal \| gradient-lime \| gradient-red \| gradient-pink \| gradient-purple \| shadow-blue \| shadow-green \| shadow-cyan \| shadow-teal \| shadow-lime \| shadow-red \| shadow-pink \| shadow-purple \| outline-blue \| outline-dark \| outline-green \| outline-red \| outline-yellow \| outline-purple \| purple-blue \| cyan-blue \| green-blue \| purple-pink \| pink-orange | Defines the Button style. | `"default"` |
|`size` | 'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' | Defines the size of the button | `"base"` |
|`loading` | boolean | Defines is button in loading state | `"false"` |
|`buttonStyle` | string | Addational tailwind classes | `""`|

### MonoTixBox

| Prop Name                  | Type                               | Description                                      | Default    |
| --------------------------- | ---------------------------------- | ------------------------------------------------ | ---------- |
| `label`                     | string                           | Label for the tick box.                          | `""`       |
| `required`                  | boolean                          | Marks the tick box as required.                  | `false`    |
| `description`               | string                           | Additional description below the label.          | `""`       |
| `disabled`                  | boolean                         | Disables the tick box.                           | `false`    |
| `option`                    | BoxOptionType                    | Tick box option details.                         | `{ label: "TickBox", required: true, checked: false }` |
| `variant`                   | BoxVariant                      | Defines the tick box variant style.              | `"default"` |
| `onTick`                    | `(updatedOptions: BoxOptionType) => void` | Callback function triggered on tick change. | `() => {}`  |
| `errorMessage`              | string                          | Displays an error message.                       | `""`       |
| `mainContainerStyles_mtb`   | string                          | Custom styles for the main container.            | `""`       |
| `infoContainerStyles_mtb`   | string                         | Custom styles for the info container.            | `""`       |
| `labelStyles_mtb`           | string                          | Custom styles for the label.                     | `""`       |
| `descriptionStyles_mtb`     | string                          | Custom styles for the description.               | `""`       |
| `mtbContainerStyles_mtb`    | string                          | Custom styles for the MonoTixBox container.      | `""`       |
| `optionStyle_mtb`           | string                          | Custom styles for the option.                    | `""`       |
| `boxStyle_mtb`              | string                           | Custom styles for the tick box.                  | `""`       |
| `errorStyles_mtb`           | string                          | Custom styles for the error message.             | `""`       |

### TixBox
| Prop Name                     | Type                                | Description                                                    | Default |
|--------------------------------|------------------------------------|----------------------------------------------------------------|---------|
| `label`                        | string                             | Label for the tick box group.                                  | `""`    |
| `required`                     | boolean                            | Marks the tick box group as required.                         | `false` |
| `description`                  | string                             | Additional description below the label.                        | `""`    |
| `disabled`                     | boolean                            | Disables all tick boxes in the group.                         | `false` |
| `options` `*`                     | `BoxOptionType[]`                  | List of tick box options.                                      | `[]`    |
| `multiSelect`                  | boolean                            | Allows multiple selections.                                   | `false` |
| `variant`                      |  default \| f-defaul \| green  \| f-green  \| red  \| f-red  \| yellow  \| f-yellow  \| purple  \| f-purple'  | Defines the tick box variant style.                           | `"default"` |
| `onTick`                       | `(updatedOptions: BoxOptionType[], changedOption: BoxOptionType) => void` | Callback function triggered on tick change.                  | `() => {}` |
| `errorMessage`                 | string                             | Displays an error message.                                    | `""`    |
| `mainContainerStyles_tb`       | string                             | Custom styles for the main container.                         | `""`    |
| `infoContainerStyles_tb`       | string                             | Custom styles for the label/description container.            | `""`    |
| `labelStyles_tb`              | string                             | Custom styles for the label.                                  | `""`    |
| `descriptionStyles_tb`        | string                             | Custom styles for the description.                            | `""`    |
| `tbContainerStyles_tb`        | string                             | Custom styles for the tick box container.                     | `""`    |
| `optionStyle_tb`              | string                             | Custom style for options | `""` |
| `errorStyles_tb` | string | custom style for error message | `""` |

### Badge
| Prop Name   | Type     | Description                    | Default |
|------------|---------|--------------------------------|---------|
| `label` `*` | string | Badge text content. | `undefined` |
| `variant` | primary \| secondary | Defines the badge varient. | `"primary"` |
| `size` | xs \| sm \| md | Defines the size of the badge. | `"sm"` |
| `color` | blue \| gray \| green \| red \| yellow \| purple \| white \| black \| none | Defines the badge style. | `"default"` |
| `badgeStyle` | string | Addational tailwind classes. | `""` |

## Developer Information

- **Library Maintainer**: Shirish
- **Version**: 1.0.0
- **License**: MIT
- **GitHub Repository**: [GitHub Link](https://github.com/quickat/ui)

More components and props will be added soon to further enhance the customization options!

---
This documentation will be updated regularly to include all features and components. Stay tuned for more updates! 🚀