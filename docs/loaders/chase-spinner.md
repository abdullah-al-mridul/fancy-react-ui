---
outline: deep
---

# Chase Spinner

The `ChaseSpinner` component displays a loading animation with multiple dots chasing each other in a circular motion, creating a smooth and engaging loading indicator.

## Basic Usage

```jsx
import { ChaseSpinner } from "fancy-react-ui";

function App() {
  return <ChaseSpinner />;
}
```

Live Demo:

<ChaseWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of the dots          |
| `speed`     | `number` | `0.8`     | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Chase Spinner

```jsx
<ChaseSpinner size={48} color="#4CAF50" speed={1.2} />
```

### Custom Size and Color

```jsx
<ChaseSpinner size={60} color="#9933ff" />
```

### Custom Speed

```jsx
<ChaseSpinner speed={1.5} color="#ff3366" />
```

### With Custom Styling

```jsx
<ChaseSpinner
  size={50}
  color="#33cc33"
  className="custom-chase"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The ChaseSpinner consists of 8 dots arranged in a circular pattern, each rotating and following the previous dot to create a chasing effect. The animation is controlled through CSS transforms and transitions.

```jsx
// Internal structure
<div className="chase-spinner">
  <div className="chase-circle">
    {/* 8 dots with 45-degree rotation each */}
    <div className="chase-dot" style={{ transform: "rotate(0deg)" }} />
    <div className="chase-dot" style={{ transform: "rotate(45deg)" }} />
    {/* ... and so on */}
  </div>
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- API request indicators
- Data loading states
- Form submission feedback
- Content loading indicators
- Process initialization feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation smoothness
- Browser compatibility considerations
- Performance optimization tips
- Mobile responsiveness

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Rotating Spinner](/loaders/rotating-spinner.html): A simple rotating animation
- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
