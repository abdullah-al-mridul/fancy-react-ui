---
outline: deep
---

# Pixel Spinner

The `PixelSpinner` component creates a retro-style loading animation with pixelated blocks, perfect for gaming or retro-themed applications.

## Basic Usage

```jsx
import { PixelSpinner } from "fancy-loader-react";

function App() {
  return <PixelSpinner />;
}
```

Live Demo:

<PixelWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the pixels           |
| `speed`     | `number` | `1`       | Animation speed in seconds    |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<PixelSpinner size={48} color="#33cc33" />
```

### Custom Speed

```jsx
<PixelSpinner speed={1.2} color="#ffcc00" />
```
