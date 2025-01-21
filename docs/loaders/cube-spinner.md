---
outline: deep
---

# Cube Spinner

The `CubeSpinner` component displays a loading animation with a rotating 3D cube, creating an engaging and modern loading indicator.

## Basic Usage

```jsx
import { CubeSpinner } from "fancy-react-ui";

function App() {
  return <CubeSpinner />;
}
```

Live Demo:

<CubeWrapper />

## Props

| Prop Name     | Type     | Default   | Description                    |
| ------------- | -------- | --------- | ------------------------------ |
| `size`        | `number` | `40`      | Size in pixels                 |
| `color`       | `string` | `#2196f3` | Color of the cube              |
| `speed`       | `number` | `1`       | Animation speed in seconds     |
| `perspective` | `number` | `800`     | 3D perspective value in pixels |
| `className`   | `string` | `""`      | Additional CSS class names     |
| `style`       | `object` | `{}`      | Additional inline styles       |

## Examples

### Basic Cube Spinner

```jsx
<CubeSpinner size={48} color="#2196F3" speed={1} perspective={800} />
```

### Custom Size and Color

```jsx
<CubeSpinner size={60} color="#9933ff" />
```

### Custom Perspective

```jsx
<CubeSpinner perspective={1200} color="#ff3366" />
```

### With Custom Styling

```jsx
<CubeSpinner
  size={50}
  color="#33cc33"
  className="custom-cube"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The CubeSpinner consists of six faces that form a 3D cube. The component automatically handles color conversion for transparency effects.

```jsx
// Internal structure
<div className="cube-spinner">
  <div className="cube">
    <div className="face front" />
    <div className="face back" />
    <div className="face right" />
    <div className="face left" />
    <div className="face top" />
    <div className="face bottom" />
  </div>
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- 3D application loading
- Modern web interfaces
- Game loading screens
- Interactive applications
- Visual-heavy content loading

## Troubleshooting

Address potential issues developers might encounter, like:

- 3D transform support
- Perspective adjustments
- Color transparency
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Rotating Spinner](/loaders/rotating-spinner.html): A simple rotating animation
- [Grid Spinner](/loaders/grid-spinner.html): A grid-based animation
