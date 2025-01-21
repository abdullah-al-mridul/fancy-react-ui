---
outline: deep
---

# Loading Overlay

The `LoadingOverlay` component displays a full-screen or container overlay with a customizable spinner and text, perfect for blocking user interaction during loading states.

## Basic Usage

```jsx
import { LoadingOverlay } from "fancy-react-ui";

function App() {
  return <LoadingOverlay />;
}
```

Live Demo:

<LoadingOverlayWrapper />

## Props

| Prop Name        | Type      | Default                               | Description                     |
| ---------------- | --------- | ------------------------------------- | ------------------------------- |
| `active`         | `boolean` | `true`                                | Controls overlay visibility     |
| `spinnerProps`   | `object`  | `{ type: "BorderSpinner", size: 48 }` | Spinner component configuration |
| `text`           | `string`  | -                                     | Loading text to display         |
| `textStyle`      | `object`  | `{}`                                  | Custom text styles              |
| `overlayColor`   | `string`  | `rgba(0, 0, 0, 0.7)`                  | Background color of overlay     |
| `containerStyle` | `object`  | `{}`                                  | Custom container styles         |
| `className`      | `string`  | `""`                                  | Additional CSS class names      |

## Examples

### Basic Loading Overlay

```jsx
<LoadingOverlay
  active={true}
  spinnerProps={{
    type: "BorderSpinner",
    size: 48,
    color: "#fff",
  }}
  text="Loading..."
  overlayColor="rgba(0, 0, 0, 0.7)"
/>
```

### Custom Spinner Type

```jsx
<LoadingOverlay
  spinnerProps={{
    type: "GlitchSpinner",
    color: "#00ff00",
  }}
  text="Processing..."
/>
```

### With Custom Styling

```jsx
<LoadingOverlay
  spinnerProps={{ type: "PulseSpinner" }}
  overlayColor="rgba(33, 33, 33, 0.8)"
  textStyle={{ color: "#fff", fontSize: "18px" }}
  containerStyle={{ borderRadius: "8px" }}
/>
```

## Implementation Details

The LoadingOverlay component dynamically renders the specified spinner component and optional text within a container.

```jsx
// Internal structure
<div className="loading-overlay">
  <div className="loading-content">
    <SpinnerComponent {...spinnerProps} />
    {text && (
      <div className="loading-text" style={textStyle}>
        {text}
      </div>
    )}
  </div>
</div>
```

## Common Use Cases

Highlight typical scenarios where the overlay might be used:

- Form submission states
- Page transitions
- Data fetching operations
- File upload processes
- API request feedback

## Troubleshooting

Address potential issues developers might encounter, like:

- Z-index stacking
- Scroll behavior
- Text positioning
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Spinner Components](/loaders/explore-loaders.html): Individual spinner options
- [Progress](/loaders/progress.html): Progress indicator component
