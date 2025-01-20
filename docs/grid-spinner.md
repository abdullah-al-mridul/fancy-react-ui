---
outline: deep
---

# Grid Spinner

The `GridSpinner` component creates a loading animation with a grid of squares that pulse in sequence.

## Basic Usage

```jsx
import { GridSpinner } from "fancy-loader-react";

function App() {
  return <GridSpinner />;
}
```

Live Demo:

<GridWrapper />

## Props

| Prop Name   | Type     | Default   | Description                   |
| ----------- | -------- | --------- | ----------------------------- |
| `size`      | `number` | `40`      | Size of the spinner in pixels |
| `color`     | `string` | `#0066ff` | Color of the grid squares     |
| `speed`     | `number` | `1.2`     | Animation speed in seconds    |
| `className` | `string` | `""`      | Additional CSS class names    |
| `style`     | `object` | `{}`      | Additional inline styles      |

## Examples

### Custom Size and Color

```jsx
<GridSpinner size={60} color="#FF5722" />
```

### Custom Speed

```jsx
<GridSpinner speed={1.5} color="#FF9800" />
```
