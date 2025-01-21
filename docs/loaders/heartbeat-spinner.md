---
outline: deep
---

# Heartbeat Spinner

The `HeartbeatSpinner` component displays a loading animation with a pulsing heart effect, perfect for creating engaging and playful loading states.

## Basic Usage

```jsx
import { HeartbeatSpinner } from "fancy-react-ui";

function App() {
  return <HeartbeatSpinner />;
}
```

Live Demo:

<HeartbeatWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#FF4B4B` | Color of the heart         |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Heartbeat Spinner

```jsx
<HeartbeatSpinner size={48} color="#FF4B4B" speed={1} />
```

### Custom Size and Color

```jsx
<HeartbeatSpinner size={60} color="#ff3366" />
```

### Custom Animation Speed

```jsx
<HeartbeatSpinner speed={1.2} color="#ff6699" />
```

### With Custom Styling

```jsx
<HeartbeatSpinner
  size={50}
  color="#ff4d4d"
  className="custom-heartbeat"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The HeartbeatSpinner consists of a heart shape that pulses using CSS animations. The heart is created using border properties and transforms.

```jsx
// Internal structure
<div className="heartbeat-spinner">
  <div
    className="heart"
    style={{
      borderColor: color,
      backgroundColor: color,
    }}
  />
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Social media applications
- Dating applications
- Like/favorite animations
- Emotional feedback states
- Engagement indicators

## Troubleshooting

Address potential issues developers might encounter, like:

- Heart shape rendering
- Animation smoothness
- Browser compatibility
- Performance optimization
- Mobile responsiveness

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
