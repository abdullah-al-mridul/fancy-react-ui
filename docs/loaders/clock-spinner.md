---
outline: deep
---

# Clock Spinner

The `ClockSpinner` component displays a loading animation that resembles a clock with rotating hands, creating an intuitive and familiar loading indicator.

## Basic Usage

```jsx
import { ClockSpinner } from "fancy-react-ui";

function App() {
  return <ClockSpinner />;
}
```

Live Demo:

<ClockWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#0066ff` | Color of clock hands       |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `thickness` | `number` | `2`       | Thickness of clock hands   |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Clock Spinner

```jsx
<ClockSpinner size={48} color="#F44336" speed={1} thickness={2} />
```

### Custom Size and Color

```jsx
<ClockSpinner size={60} color="#2196F3" />
```

### Custom Thickness

```jsx
<ClockSpinner thickness={3} color="#ff3366" />
```

### With Custom Styling

```jsx
<ClockSpinner
  size={50}
  color="#33cc33"
  className="custom-clock"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The ClockSpinner consists of a circular border with hour and minute hands that rotate continuously. The hands are sized proportionally to the container.

```jsx
// Internal structure
<div className="clock-spinner">
  <div
    className="clock-hand hour-hand"
    style={{ height: `${size * 0.3}px`, width: thickness }}
  />
  <div
    className="clock-hand minute-hand"
    style={{ height: `${size * 0.4}px`, width: thickness }}
  />
  <div
    className="clock-center"
    style={{ width: thickness * 3, height: thickness * 3 }}
  />
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Time-based operations
- Schedule processing
- Timer interfaces
- Waiting period indicators
- Time-sensitive loading states

## Troubleshooting

Address potential issues developers might encounter, like:

- Hand rotation smoothness
- Center point alignment
- Size calculations
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Rotating Spinner](/loaders/rotating-spinner.html): A simple rotating animation
- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
