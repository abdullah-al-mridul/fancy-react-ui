---
outline: deep
---

# Wave Spinner

The `WaveSpinner` component displays a loading animation with five bars that animate in a wave-like pattern, creating a smooth and dynamic loading indicator.

## Basic Usage

```jsx
import { WaveSpinner } from "fancy-react-ui";

function App() {
  return <WaveSpinner />;
}
```

Live Demo:

<WaveWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of the bars          |
| `speed`     | `number` | `0.8`     | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Wave Spinner

```jsx
<WaveSpinner size={50} color="#F44336" speed={0.6} />
```

### Custom Size and Color

```jsx
<WaveSpinner size={60} color="#2196F3" />
```

### Custom Speed

```jsx
<WaveSpinner speed={1.2} color="#3F51B5" />
```

### With Custom Styling

```jsx
<WaveSpinner
  size={50}
  color="#33cc33"
  className="custom-wave"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The WaveSpinner consists of five bars that animate in sequence to create a wave effect. Each bar uses the same animation but with different delays.

```jsx
// Internal structure
<div className="wave-spinner">
  {/* 5 bars with wave animation */}
  {[...Array(5)].map((_, i) => (
    <div
      className="wave-bar"
      style={{
        backgroundColor: color,
        animationDuration: `${speed}s`,
      }}
    />
  ))}
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Audio processing indicators
- Data streaming states
- Progress indicators
- Loading transitions
- Media player controls

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation smoothness
- Wave timing adjustments
- Browser compatibility
- Performance optimization
- Mobile responsiveness

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
