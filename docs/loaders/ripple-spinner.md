---
outline: deep
---

# Ripple Spinner

The `RippleSpinner` component displays a loading animation with expanding ripple effects radiating from a central point, creating a smooth and engaging loading indicator.

## Basic Usage

```jsx
import { RippleSpinner } from "fancy-react-ui";

function App() {
  return <RippleSpinner />;
}
```

Live Demo:

<RippleWrapper />

## Props

| Prop Name     | Type     | Default   | Description                |
| ------------- | -------- | --------- | -------------------------- |
| `size`        | `number` | `40`      | Size in pixels             |
| `color`       | `string` | `#0066ff` | Color of ripples           |
| `speed`       | `number` | `1`       | Animation speed in seconds |
| `thickness`   | `number` | `2`       | Thickness of ripples       |
| `rippleCount` | `number` | `3`       | Number of ripple rings     |
| `className`   | `string` | `""`      | Additional CSS class names |
| `style`       | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Ripple Spinner

```jsx
<RippleSpinner
  size={48}
  color="#2196F3"
  speed={1}
  thickness={2}
  rippleCount={3}
/>
```

### Custom Size and Color

```jsx
<RippleSpinner size={60} color="#9933ff" />
```

### Custom Ripple Configuration

```jsx
<RippleSpinner rippleCount={4} thickness={3} color="#ff3366" />
```

### With Custom Styling

```jsx
<RippleSpinner
  size={50}
  color="#33cc33"
  className="custom-ripple"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The RippleSpinner consists of multiple expanding rings and a central dot. Each ring animates with a calculated delay to create a ripple effect.

```jsx
// Internal structure
<div className="ripple-spinner">
  {[...Array(rippleCount)].map((_, i) => (
    <div
      className="ripple"
      style={{
        borderWidth: thickness,
        borderColor: color,
        animationDelay: `${(i * speed) / rippleCount}s`,
      }}
    />
  ))}
  <div
    className="ripple-center"
    style={{
      backgroundColor: color,
      width: size * 0.2,
      height: size * 0.2,
    }}
  />
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Click feedback
- Location indicators
- Network activity
- Data synchronization
- Interactive feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Ring scaling
- Animation timing
- Center point alignment
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
