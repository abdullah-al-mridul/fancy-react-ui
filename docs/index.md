---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fancy Loader"
  text: "Customizable React Loader Components"
  tagline: Elegant React Loaders. Fast & Customizable!
  image:
    src: /logo.png
    alt: Fancy Loader logo

  actions:
    - theme: brand
      text: Get Started
      link: "#getting-started"
    - theme: alt
      text: Explore Loaders
      link: /explore-loaders

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

To get started with **Fancy Loader**, simply install it using npm:

### Using npm:

```bash
npm install fancy-loader-react
```

Once installed, import the loader components into your React project:

```javascript
import { ClockSpinner } from "fancy-loader-react";
```

### Usage

Now that you’ve installed Fancy Loader, here’s how to use it in your app:

```javascript
import React from "react";
import { ClockSpinner } from "fancy-loader-react";

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

You can style **Fancy Loader** further using CSS. For example:

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

**Fancy Loader** supports the following browsers:

| Browser | Supported Versions |
| ------- | ------------------ |
| Chrome  | Latest 2 versions  |
| Firefox | Latest 2 versions  |
| Safari  | Latest 2 versions  |
| Edge    | Latest 2 versions  |
| Opera   | Latest 2 versions  |
