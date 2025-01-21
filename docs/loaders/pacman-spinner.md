---
outline: deep
---

# Pacman Spinner

The `PacmanSpinner` component displays a loading animation inspired by Pac-Man, featuring a chomping animation with dots being eaten.

## Basic Usage

```jsx
import { PacmanSpinner } from "fancy-react-ui";

function App() {
  return <PacmanSpinner />;
}
```

Live Demo:

<PacmanWrapper />

## Props

| Prop Name   | Type     | Default   | Description                |
| ----------- | -------- | --------- | -------------------------- |
| `size`      | `number` | `40`      | Size in pixels             |
| `color`     | `string` | `#FFEB3B` | Color of Pacman and dots   |
| `speed`     | `number` | `1`       | Animation speed in seconds |
| `dotCount`  | `number` | `4`       | Number of dots             |
| `dotSize`   | `number` | `6`       | Size of dots in pixels     |
| `className` | `string` | `""`      | Additional CSS class names |
| `style`     | `object` | `{}`      | Additional inline styles   |

## Examples

### Basic Pacman Spinner

```jsx
<PacmanSpinner size={48} color="#FFEB3B" speed={1} dotCount={4} />
```

### Custom Size and Color

```jsx
<PacmanSpinner size={60} color="#FFC107" />
```

### Custom Dots Configuration

```jsx
<PacmanSpinner dotCount={5} dotSize={8} color="#FFD700" />
```

### With Custom Styling

```jsx
<PacmanSpinner
  size={50}
  color="#FFB300"
  className="custom-pacman"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The PacmanSpinner consists of a Pacman character created with CSS shapes and animated dots that get "eaten".

```jsx
// Internal structure
<div className="pacman-spinner">
  <div className="pacman">
    <div className="pacman-top" style={{ backgroundColor: color }} />
    <div className="pacman-bottom" style={{ backgroundColor: color }} />
  </div>
  <div className="dots">
    {[...Array(dotCount)].map((_, i) => (
      <div
        className="dot"
        style={{
          backgroundColor: color,
          animationDelay: `${(i * speed) / dotCount}s`,
        }}
      />
    ))}
  </div>
</div>
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Gaming applications
- Fun loading states
- Interactive interfaces
- Game loading screens
- Playful web applications

## Troubleshooting

Address potential issues developers might encounter, like:

- Animation timing
- Dot positioning
- Shape rendering
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Bounce Spinner](/loaders/bounce-spinner.html): A bouncing animation
- [Wave Spinner](/loaders/wave-spinner.html): A wave-based animation
