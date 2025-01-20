---
outline: deep
---

# Bounce Spinner

The `BounceSpinner` component creates a loading animation with bouncing dots, perfect for indicating loading states in your application.

## Basic Usage

```jsx
import { BounceSpinner } from "fancy-loader-react";

function App() {
  return <BounceSpinner />;
}
```

Live Demo:

<BounceWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the bouncing dots    |
| `speed`     | `number` | `0.8`     | Animation speed in seconds    |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<BounceSpinner size={50} color="#9933ff" />
```

### Custom Speed

```jsx
<BounceSpinner speed={1.5} color="#ff3366" />
```
