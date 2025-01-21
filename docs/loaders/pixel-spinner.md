---
outline: deep
---

# Pixel Spinner

The `PixelSpinner` component displays a retro-style loading animation with a 4x4 grid of pixels that animate sequentially, perfect for gaming or retro-themed applications.

## Basic Usage

```jsx
import { PixelSpinner } from "fancy-react-ui";

function App() {
  return <PixelSpinner />;
}
```

Live Demo:

<PixelWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#2196f3` | Color of the pixels        |
| `text`      | `string` | `Loading` | Loading text to display    |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `pixelSize` | `number` | `4`       | Size of each pixel         |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Pixel Spinner

```jsx
<PixelSpinner size={48} color="#2196F3" text="Loading" pixelSize={4} />
```

### Custom Size and Color

```jsx
<PixelSpinner size={60} color="#9933ff" />
```

### Custom Text and Pixel Size

```jsx
<PixelSpinner text="Please wait..." pixelSize={6} color="#ff3366" />
```

### With Custom Styling

```jsx
<PixelSpinner
  size={50}
  color="#33cc33"
  className="custom-pixel"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The PixelSpinner consists of a 4x4 grid (16 pixels) that animate with sequential delays. Each pixel animates independently with a 0.1s delay from the previous pixel.

```jsx
// Internal structure
<div className="pixel-spinner">
  <div className="pixel-grid">
    {/* 16 pixels with sequential delays */}
    {pixels.map((i) => (
      <div className="pixel" style={{ animationDelay: `${i * 0.1}s` }} />
    ))}
  </div>
  {text && <div className="pixel-text">{text}</div>}
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Gaming applications
- Retro-themed interfaces
- 8-bit style websites
- Game loading screens
- Nostalgic user interfaces

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation smoothness
- Text alignment
- Pixel sizing calculations
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Grid Spinner](/loaders/grid-spinner.html): A modern grid animation
- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
