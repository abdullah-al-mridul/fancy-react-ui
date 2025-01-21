---
outline: deep
---

# Typing Spinner

The `TypingSpinner` component displays a loading animation that resembles a typing indicator, perfect for chat or messaging interfaces.

## Basic Usage

```jsx
import { TypingSpinner } from "fancy-react-ui";

function App() {
  return <TypingSpinner />;
}
```

Live Demo:

<TypingWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#2196F3` | Color of the dots          |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `dotCount`  | `number` | `3`       | Number of dots             |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Typing Spinner

```jsx
<TypingSpinner size={48} color="#2196F3" speed={1} dotCount={3} />
```

### Custom Size and Color

```jsx
<TypingSpinner size={60} color="#9933ff" />
```

### Custom Dot Count

```jsx
<TypingSpinner dotCount={4} color="#ff3366" />
```

### With Custom Styling

```jsx
<TypingSpinner
  size={50}
  color="#33cc33"
  className="custom-typing"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The TypingSpinner consists of multiple dots that animate in sequence to create a typing effect. Each dot is sized relative to the container and animates with a calculated delay.

```jsx
// Internal structure
<div className="typing-spinner">
  {[...Array(dotCount)].map((_, i) => (
    <div
      className="typing-dot"
      style={{
        animationDelay: `${(i * speed) / 3}s`,
      }}
    />
  ))}
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Chat applications
- Message typing indicators
- Response waiting states
- User status indicators
- Interactive feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Dot sizing and spacing
- Animation timing
- Browser compatibility
- Performance optimization
- Mobile responsiveness

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Text Spinner](/loaders/text-spinner.html): A text-based loading animation
- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
