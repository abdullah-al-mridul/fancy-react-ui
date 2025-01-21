---
outline: deep
---

# Progress

The `Progress` component displays a customizable progress bar with various styles, including striped and gradient effects.

## Basic Usage

```jsx
import { Progress } from "fancy-react-ui";

function App() {
  return <Progress value={50} />;
}
```

Live Demo:

<ProgressWrapper />

## Props

| Prop Name         | Type      | Default   | Description                       |
| ----------------- | --------- | --------- | --------------------------------- |
| `value`           | `number`  | `10`      | Progress value (0-100)            |
| `color`           | `string`  | `#0066ff` | Color of progress bar             |
| `height`          | `number`  | `8`       | Height in pixels                  |
| `showPercentage`  | `boolean` | `false`   | Show percentage text              |
| `backgroundColor` | `string`  | `#f0f0f0` | Background color                  |
| `borderRadius`    | `number`  | `4`       | Border radius in pixels           |
| `animated`        | `boolean` | `true`    | Enable animation                  |
| `textColor`       | `string`  | -         | Text color (auto if not set)      |
| `textSize`        | `number`  | `12`      | Text size in pixels               |
| `textPosition`    | `string`  | `center`  | Text position (left/center/right) |
| `striped`         | `boolean` | `false`   | Enable striped effect             |
| `gradient`        | `object`  | -         | Gradient colors configuration     |
| `className`       | `string`  | `""`      | Additional CSS class names        |
| `style`           | `object`  | `{}`      | Additional inline styles          |

## Examples

### Basic Progress Bar

```jsx
<Progress value={50} color="#F44336" showPercentage={true} textColor="#fff" />
```

### Striped Progress Bar

```jsx
<Progress value={75} striped={true} color="#2196F3" height={12} />
```

### Gradient Progress Bar

```jsx
<Progress
  value={60}
  gradient={{
    colors: ["#FF6B6B", "#FF9F40"],
  }}
  showPercentage={true}
/>
```

### With Custom Styling

```jsx
<Progress
  value={80}
  height={16}
  borderRadius={8}
  textPosition="right"
  className="custom-progress"
  style={{ margin: "20px" }}
/>
```

## Implementation Details

The Progress component supports various styles and configurations, including gradient effects and text positioning.

```jsx
// Internal structure
<div className="progress-container">
  <div
    className={`progress-bar ${animated ? "animated" : ""} ${
      striped ? "striped" : ""
    }`}
    style={{
      width: `${percentage}%`,
      backgroundColor: gradient ? undefined : color,
      background: gradient ? getGradientBackground() : undefined,
    }}
  />
  {showPercentage && (
    <div className="progress-text">{Math.round(percentage)}%</div>
  )}
</div>
```

## Common Use Cases

Highlight typical scenarios where the progress bar might be used:

- File upload progress
- Form completion status
- Step indicators
- Loading progress
- Task completion tracking

## Troubleshooting

Address potential issues developers might encounter, like:

- Text visibility
- Gradient rendering
- Animation smoothness
- Browser compatibility
- Performance optimization

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Loading Overlay](/loaders/loading-overlay.html): Full overlay loading
- [Spinner Components](/loaders/explore-loaders.html): Loading spinners
