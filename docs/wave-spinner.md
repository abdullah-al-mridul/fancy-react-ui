---
outline: deep
---

# Wave Spinner

The `WaveSpinner` component creates a loading animation with dots that move in a wave-like pattern.

## Basic Usage

```jsx
import { WaveSpinner } from "fancy-loader-react";

function App() {
  return <WaveSpinner />;
}
```

Live Demo:

<WaveWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the wave dots        |
| `speed`     | `number` | `1`       | Animation speed in seconds    |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<WaveSpinner size={60} color="#2196F3" />
```

### Custom Speed

```jsx
<WaveSpinner speed={1.2} color="#3F51B5" />
```
