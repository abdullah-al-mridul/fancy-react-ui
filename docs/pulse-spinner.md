---
outline: deep
---

# Pulse Spinner

The `PulseSpinner` component creates a pulsating loading animation that smoothly scales in and out.

## Basic Usage

```jsx
import { PulseSpinner } from "fancy-loader-react";

function App() {
  return <PulseSpinner />;
}
```

Live Demo:

<PulseWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the pulse            |
| `speed`     | `number` | `0.8`     | Animation speed in seconds    |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<PulseSpinner size={60} color="#9C27B0" />
```

### Custom Speed

```jsx
<PulseSpinner speed={1.2} color="#FF9800" />
```
