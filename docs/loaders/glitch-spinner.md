---
outline: deep
---

# Glitch Spinner

The `GlitchSpinner` component displays a loading animation with a cyberpunk-style glitch effect, perfect for creating modern and edgy loading states.

## Basic Usage

```jsx
import { GlitchSpinner } from "fancy-react-ui";

function App() {
  return <GlitchSpinner />;
}
```

Live Demo:

<GlitchWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#2196f3` | Color of the glitch        |
| `text`      | `string` | `Loading` | Text to display            |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Glitch Spinner

```jsx
<GlitchSpinner size={48} color="#2196F3" text="Loading" />
```

### Custom Size and Color

```jsx
<GlitchSpinner size={60} color="#9933ff" />
```

### Custom Text

```jsx
<GlitchSpinner text="Processing" color="#ff3366" />
```

### With Custom Styling

```jsx
<GlitchSpinner
  size={50}
  color="#33cc33"
  className="custom-glitch"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The GlitchSpinner includes a circle with glitch effects and optional text. It automatically converts hex colors to RGB for transparency effects.

```jsx
// Internal structure
<div className="glitch-spinner">
  <div className="glitch-circle">
    <div className="glitch-circle-inner" />
  </div>
  {text && (
    <div className="glitch-text" data-text={text}>
      {text}
    </div>
  )}
  <div className="glitch-scanlines" />
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Cyberpunk-themed applications
- Tech-focused interfaces
- Gaming applications
- Error states
- System processing indicators

## Troubleshooting

Address potential issues developers might encounter, like:

- Glitch effect timing
- Color conversion
- Text alignment
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Text Spinner](/loaders/text-spinner.html): A text-based animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
