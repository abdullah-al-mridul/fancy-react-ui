---
outline: deep
---

# Text Spinner

The `TextSpinner` component displays a loading text with animated dots, creating a simple and familiar loading indicator.

## Basic Usage

```jsx
import { TextSpinner } from "fancy-react-ui";

function App() {
  return <TextSpinner />;
}
```

Live Demo:

<TextWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `text`      | `string` | `Loading` | Text to display            |
| `size`      | `number` | `16`      | Font size in pixels        |
| `color`     | `string` | `#333333` | Color of text and dots     |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `dotCount`  | `number` | `3`       | Number of animated dots    |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Text Spinner

```jsx
<TextSpinner text="Loading" size={16} color="#333" speed={1} dotCount={3} />
```

### Custom Text and Size

```jsx
<TextSpinner text="Please wait" size={20} color="#2196F3" />
```

### Custom Dots

```jsx
<TextSpinner dotCount={4} speed={0.8} color="#ff3366" />
```

### With Custom Styling

```jsx
<TextSpinner
  text="Processing"
  size={18}
  color="#33cc33"
  className="custom-text"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The TextSpinner consists of text followed by animated dots. Each dot animates with a calculated delay based on its position.

```jsx
// Internal structure
<div className="text-spinner">
  {text}
  <span className="text-spinner-dots">
    {[...Array(dotCount)].map((_, i) => (
      <span
        className="text-spinner-dot"
        style={{ animationDelay: `${(i * speed) / dotCount}s` }}
      >
        .
      </span>
    ))}
  </span>
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Form submission states
- Data loading indicators
- Process status feedback
- Chat message states
- Simple loading indicators

## Troubleshooting

Address potential issues developers might encounter, like:

- Text alignment
- Dot animation timing
- Font size adjustments
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Typing Spinner](/loaders/typing-spinner.html): A typing animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
