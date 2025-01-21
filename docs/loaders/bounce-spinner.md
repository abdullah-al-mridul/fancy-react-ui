---
outline: deep
---

# Bounce Spinner

The `BounceSpinner` component displays a loading animation with three bouncing dots that create a smooth and playful loading indicator.

## Basic Usage

```jsx
import { BounceSpinner } from "fancy-react-ui";

function App() {
  return <BounceSpinner />;
}
```

Live Demo:

<BounceWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of the dots          |
| `speed`     | `number` | `0.8`     | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Bounce Spinner

```jsx
<BounceSpinner size={40} color="#FFC107" speed={0.8} />
```

### Custom Size and Color

```jsx
<BounceSpinner size={60} color="#9933ff" />
```

### Custom Speed

```jsx
<BounceSpinner speed={1.2} color="#ff3366" />
```

### With Custom Styling

```jsx
<BounceSpinner
  size={50}
  color="#33cc33"
  className="custom-bounce"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The BounceSpinner consists of three dots that bounce in sequence, creating a wave-like animation effect. Each dot is sized at 25% of the container's dimensions and uses CSS animations for the bouncing effect.

```jsx
// Internal structure
<div className="bounce-spinner">
  {/* Three dots with staggered animation delays */}
  <div className="bounce-dot" /> {/* delay: -0.32s */}
  <div className="bounce-dot" /> {/* delay: -0.16s */}
  <div className="bounce-dot" /> {/* delay: 0s */}
</div>
```

The animation uses CSS transforms to scale the dots between 0.3 and 1:

```css
@keyframes bounce {
  0%,
  100% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1);
  }
}
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- API request indicators
- Data loading states
- Form submission feedback
- Message sending indicators
- Content loading states

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation smoothness
- Browser compatibility considerations
- Performance optimization tips
- Mobile responsiveness
- Animation timing adjustments

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
