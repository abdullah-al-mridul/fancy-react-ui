---
outline: deep
---

# Ring Spinner

The `RingSpinner` component creates a smooth circular loading animation with a rotating ring effect.

## Basic Usage

```jsx
import { RingSpinner } from "fancy-loader-react";

function App() {
  return <RingSpinner />;
}
```

Live Demo:

<RingWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the ring             |
| `speed`     | `number` | `0.8`     | Animation speed in seconds    |
| `thickness` | `number` | `4`       | Thickness of the ring         |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<RingSpinner size={60} color="#4CAF50" />
```

### Custom Speed and Thickness

```jsx
<RingSpinner speed={1.2} thickness={6} color="#FF5722" />
```
