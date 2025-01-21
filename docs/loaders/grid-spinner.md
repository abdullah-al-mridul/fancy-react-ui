---
outline: deep
---

# Grid Spinner

The `GridSpinner` component displays a loading animation with a 3x3 grid of blocks that pulse in sequence, creating a smooth and organized loading indicator.

## Basic Usage

```jsx
import { GridSpinner } from "fancy-react-ui";

function App() {
  return <GridSpinner />;
}
```

Live Demo:

<GridWrapper />

## Props

| Prop Name   | Type     | Default   | Description                  |
| ----------- | -------- | --------- | ---------------------------- |
| `size`      | `number` | `40`      | Overall size in pixels       |
| `color`     | `string` | `#0066ff` | Color of the blocks          |
| `speed`     | `number` | `1`       | Animation speed in seconds   |
| `gap`       | `number` | `4`       | Gap between blocks in pixels |
| `blockSize` | `number` | `8`       | Size of each block in pixels |
| `className` | `string` | `""`      | Additional CSS class names   |
| `style`     | `object` | `{}`      | Additional inline styles     |

## Examples

### Basic Grid Spinner

```jsx
<GridSpinner size={48} color="#2196F3" speed={1} gap={4} blockSize={8} />
```

### Custom Size and Color

```jsx
<GridSpinner size={60} color="#FF5722" />
```

### Custom Block Properties

```jsx
<GridSpinner gap={6} blockSize={10} color="#ff3366" />
```

### With Custom Styling

```jsx
<GridSpinner
  size={50}
  color="#33cc33"
  className="custom-grid"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The GridSpinner consists of a 3x3 grid (9 blocks) that animate with calculated delays. The component automatically scales the blocks and gaps to fit the specified size.

```jsx
// Internal structure
<div className="grid-spinner">
  {/* 9 blocks with calculated delays */}
  {[...Array(9)].map((_, i) => (
    <div
      className="grid-block"
      style={{
        animationDelay: `${(i * speed) / 9}s`,
        width: blockSize,
        height: blockSize,
      }}
    />
  ))}
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Data loading states
- Page transitions
- Form submission feedback
- Content refresh indicators
- API request states

## Troubleshooting

Address potential issues developers might encounter, like:

- Block scaling calculations
- Gap adjustments
- Animation timing
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Pixel Spinner](/loaders/pixel-spinner.html): A retro-style grid animation
- [Pulse Spinner](/loaders/pulse-spinner.html): A pulsing animation
