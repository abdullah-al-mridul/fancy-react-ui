---
outline: deep
---

# Dual Ring Spinner

The `DualRingSpinner` component displays a loading animation with two concentric rotating rings, creating an elegant and dynamic loading indicator.

## Basic Usage

```jsx
import { DualRingSpinner } from "fancy-react-ui";

function App() {
  return <DualRingSpinner />;
}
```

Live Demo:

<DualRingWrapper />

## Props

| Prop Name        | Type     | Default   | Description                |
| ---------------- | -------- | --------- | -------------------------- |
| `size`           | `number` | `40`      | Size in pixels             |
| `color`          | `string` | `#0066ff` | Primary color of rings     |
| `secondaryColor` | `string` | -         | Optional secondary color   |
| `speed`          | `number` | `1`       | Animation speed in seconds |
| `thickness`      | `number` | `3`       | Thickness of rings         |
| `className`      | `string` | `""`      | Additional CSS class names |
| `style`          | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Dual Ring Spinner

```jsx
<DualRingSpinner
  size={48}
  color="#2196F3"
  speed={1}
  thickness={3}
  secondaryColor="#90CAF9"
/>
```

### Custom Size and Color

```jsx
<DualRingSpinner size={60} color="#9933ff" />
```

### Two-Tone Rings

```jsx
<DualRingSpinner color="#ff3366" secondaryColor="#ff9999" />
```

### With Custom Styling

```jsx
<DualRingSpinner
  size={50}
  color="#33cc33"
  className="custom-dual-ring"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The DualRingSpinner consists of two concentric rings that rotate in opposite directions. The inner ring is sized at 65% of the outer ring.

```jsx
// Internal structure
<div className="dual-ring-spinner">
  <div
    className="outer-ring"
    style={{
      borderWidth: thickness,
      borderColor: `${color} transparent ${color} transparent`,
    }}
  />
  <div
    className="inner-ring"
    style={{
      borderWidth: thickness,
      borderColor: `${secondaryColor || color} transparent`,
      width: size * 0.65,
      height: size * 0.65,
    }}
  />
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Page loading states
- Form submission feedback
- Data processing indicators
- Content loading states
- API request feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Ring alignment
- Color transitions
- Animation smoothness
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Rotating Spinner](/loaders/rotating-spinner.html): A multi-ring animation
- [Ring Spinner](/loaders/ring-spinner.html): A single ring animation
