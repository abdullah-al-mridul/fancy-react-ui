---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fancy ReactUI"
  text: "Reusable Frontend Design Elements"
  tagline: Elegant, Fast, and Customizable React UI Elements!
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
      text: Explore Components
      link: /ui-components/buttons

features:
  - title: "Easy to Use"
    details: "Simply install and integrate into your React project with minimal setup."
    icon: "📦"
  - title: "Highly Customizable"
    details: "Adjust colors, sizes, and animation styles to match your design."
    icon: "🎨"
  - title: "Fast Performance"
    details: "Optimized for fast loading and smooth animations."
    icon: "⚡"
---

## Getting Started

To begin using **Fancy React UI**, simply install it using one of the following package managers:

- **npm**
- **pnpm**
- **yarn**

For detailed installation instructions, visit the [Installation Guide](/getting-started/installation).

### Using npm & pnpm:

::: code-group

```bash [npm]
npm install fancy-react-ui
```

```bash [pnpm]
pnpm add fancy-react-ui
```

```bash [yarn]
yarn add fancy-react-ui
```

:::

Once installed, import the components into your React project:

```javascript
import { ClockSpinner } from "fancy-react-ui";
```

### Usage

Now that you’ve installed Fancy React UI, here’s how to use it in your app:

```javascript
import React from "react";
import { ClockSpinner } from "fancy-react-ui";

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <ClockSpinner />
    </div>
  );
};

export default App;
```

## Customization

```javascript{2-5}
<ClockSpinner
  size={60}        // Set the size of the loader
  color="#FF4B2B"  // Set the color of the loader
  speed={0.8}      // Set the animation speed
  thickness={3}    // Set the thickness of the spinner's lines
  // You can add more props to customize the loader as needed
/>
```

You can style **Fancy React UI** further using CSS. For example:

```css
.my-custom-loader {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 10px;
}
```

Then apply it to the component:

```javascript
<ClockSpinner
  className="my-custom-loader" // [!code ++]
  size={60}
  color="#FF4B2B"
/>
```

## Browser Support

**Fancy React UI** supports the following browsers:

| Browser | Supported Versions |
| ------- | ------------------ |
| Chrome  | Latest 2 versions  |
| Firefox | Latest 2 versions  |
| Safari  | Latest 2 versions  |
| Edge    | Latest 2 versions  |
| Opera   | Latest 2 versions  |
