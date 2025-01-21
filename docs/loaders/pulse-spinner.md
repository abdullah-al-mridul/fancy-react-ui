---
outline: deep
---

# Pulse Spinner

The `PulseSpinner` component displays a loading animation with a pulsing circle effect, creating a smooth and minimalist loading indicator.

## Basic Usage

```jsx
import { PulseSpinner } from "fancy-react-ui";

function App() {
  return <PulseSpinner />;
}
```

Live Demo:

<PulseWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of the circle        |
| `speed`     | `number` | `0.8`     | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Pulse Spinner

```jsx
<PulseSpinner size={50} color="#F44336" speed={0.6} />
```

### Custom Size and Color

```jsx
<PulseSpinner size={60} color="#9933ff" />
```

### Custom Speed

```jsx
<PulseSpinner speed={1.2} color="#ff3366" />
```

### With Custom Styling

```jsx
<PulseSpinner
  size={50}
  color="#33cc33"
  className="custom-pulse"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The PulseSpinner consists of a single circle that pulses using CSS animation. The animation is applied to the container while the circle maintains its color and shape.

```jsx
// Internal structure
<div className="pulse-spinner">
  <div className="pulse-circle" />
</div>
```

The animation duration can be controlled through the speed prop, which is applied directly to the container element.

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Page loading indicators
- Button loading states
- Form submission feedback
- Content refresh indicators
- Network request states

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation smoothness
- Browser compatibility considerations
- Performance optimization tips
- Mobile responsiveness
- Animation timing adjustments

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
