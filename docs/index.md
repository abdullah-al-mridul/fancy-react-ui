---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fancy ReactUI"
  text: "Reusable Frontend Design Elements"
  tagline: Beautiful, Customizable, and Production-Ready React Components
  image:
    src: /logo.png
    alt: Fancy React UI logo

  actions:
    - theme: brand
      text: Get Started
      link: "#getting-started"
    - theme: alt
      text: Why Fancy?
      link: /getting-started/introduction
    - theme: alt
      text: View Components
      link: /ui-components/buttons

features:
  - title: "Comprehensive UI Kit"
    details: "From buttons to loaders, get all the UI components you need in one package."
    icon: "🎯"
  - title: "Highly Customizable"
    details: "Extensive customization options for colors, sizes, animations, and more."
    icon: "🎨"
  - title: "TypeScript Ready"
    details: "Built with TypeScript for better development experience and type safety."
    icon: "📝"
  - title: "Modern Design"
    details: "Clean, modern designs that adapt to both light and dark themes."
    icon: "✨"
  - title: "Performance Optimized"
    details: "Lightweight components with smooth animations and transitions."
    icon: "⚡"
  - title: "Easy Integration"
    details: "Simple installation and straightforward implementation in any React project."
    icon: "🔌"
---

## Getting Started

Install Fancy React UI using your preferred package manager:

For detailed installation instructions, visit the [Installation Guide](/getting-started/installation)

::: code-group

```bash [pnpm]
pnpm add fancy-react-ui
```

```bash [npm]
npm install fancy-react-ui
```

```bash [yarn]
yarn add fancy-react-ui
```

:::

## Quick Usage Example

Import and use any component in your React application:

```jsx
import { Button, Progress, ClockSpinner } from "fancy-react-ui";

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click Me
      </Button>

      <Progress
        value={75}
        backgroundColor="#2196F3"
        height={20}
        animated
        striped
      />

      <ClockSpinner size={60} color="#FF4B2B" speed={1.2} />
    </div>
  );
}
```

## Component Categories

### UI Components

- **Buttons**: Multiple variants with customizable styles
- **Cards**: Flexible card layouts with various designs
- **Forms**: Form elements with validation support
- **Progress**: Animated progress bars with different styles
- **Tables**: Responsive table components
- **Modals**: Customizable modal dialogs

### Loading Spinners

- **Animated Spinners**: Clock, Cube, Rotating, and more
- **Text Loaders**: Typing, Glitch, and Text effects
- **Progress Indicators**: Linear, Circular, and Custom styles
- **Loading Overlays**: Full-screen loading states

## Customization

All components support extensive customization through props:

```jsx
// Button Example
<Button
  variant="primary"    // primary, secondary, outline, text
  size="medium"        // small, medium, large
  disabled={false}     // true/false
  loading={false}      // true/false
  onClick={() => {}}   // click handler
/>

// Progress Example
<Progress
  value={75}                          // 0-100
  backgroundColor="#2196F3"           // any color
  height={20}                         // in pixels
  color="#FFFFFF"                     // text color
  striped={true}                      // true/false
  animated={true}                     // true/false
  showLabel={true}                    // true/false
  showPercentage={true}              // true/false
  label="Loading..."                  // custom label
  borderRadius={15}                   // in pixels
/>
```

## Browser Support

Fancy React UI supports all modern browsers:

| Browser | Support |
| ------- | ------- |
| Chrome  | 60+     |
| Firefox | 60+     |
| Safari  | 12+     |
| Edge    | 79+     |
| Opera   | 47+     |

## TypeScript Support

All components include TypeScript definitions for better development experience:

```typescript
import { ButtonProps, ProgressProps } from "fancy-react-ui";

// Type-safe props
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

For detailed documentation and examples, check out our [Component Guides](/getting-started/quickstart).
