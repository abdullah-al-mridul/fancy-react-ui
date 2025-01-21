---
outline: deep
---

# Rotating Spinner

The `RotatingSpinner` component displays a loading animation with nested rotating rings that create a mesmerizing concentric effect.

## Basic Usage

```jsx
import { RotatingSpinner } from "fancy-react-ui";

function App() {
  return <RotatingSpinner />;
}
```

Live Demo:

<RotatingWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of the rings         |
| `speed`     | `number` | `0.8`     | Animation speed in seconds |
| `thickness` | `number` | `3`       | Thickness of rings         |
| `ringCount` | `number` | `3`       | Number of nested rings     |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Rotating Spinner

```jsx
<RotatingSpinner
  size={50}
  color="#F44336"
  speed={0.8}
  thickness={3}
  ringCount={3}
/>
```

### Custom Size and Color

```jsx
<RotatingSpinner size={60} color="#9933ff" />
```

### Custom Ring Configuration

```jsx
<RotatingSpinner ringCount={4} thickness={2} color="#ff3366" />
```

### With Custom Styling

```jsx
<RotatingSpinner
  size={50}
  color="#33cc33"
  className="custom-rotating"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The RotatingSpinner creates nested rings recursively, each with a different size and speed. The rings are sized proportionally to create a concentric effect.

```jsx
// Internal structure
<div className="rotating-spinner">
  {/* Recursive ring creation */}
  <div
    className="rotating-ring"
    style={{
      width: `${currentSize}%`,
      height: `${currentSize}%`,
      borderWidth: thickness,
      borderColor: color,
      animationDuration: `${currentSpeed}s`,
    }}
  >
    {/* Next nested ring */}
  </div>
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Page loading indicators
- Data processing states
- Content refresh feedback
- API request states
- Complex operation feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Ring alignment
- Animation smoothness
- Browser compatibility
- Performance optimization
- Mobile responsiveness

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Dual Ring Spinner](/loaders/dual-ring-spinner.html): A dual ring animation
- [Clock Spinner](/loaders/clock-spinner.html): A clock-based animation
