---
outline: deep
---

# Button

The `Button` component provides a customizable button with various styles, sizes, and states including loading animations.

## Basic Usage

```jsx
import { Button } from "fancy-react-ui";

function App() {
  return (
    <Button variant="primary" onClick={() => console.log("clicked")}>
      Click Me
    </Button>
  );
}
```

Live Demo:

<ButtonWrapper />

## Props

| Prop Name   | Type                                              | Default     | Description                |
| ----------- | ------------------------------------------------- | ----------- | -------------------------- |
| `variant`   | `"primary" \| "secondary" \| "outline" \| "text"` | `"primary"` | Button style variant       |
| `size`      | `"small" \| "medium" \| "large"`                  | `"medium"`  | Button size                |
| `loading`   | `boolean`                                         | `false`     | Shows loading spinner      |
| `disabled`  | `boolean`                                         | `false`     | Disables the button        |
| `fullWidth` | `boolean`                                         | `false`     | Makes button full width    |
| `className` | `string`                                          | `""`        | Additional CSS class names |
| `style`     | `object`                                          | `{}`        | Additional inline styles   |

## Examples

### Button Variants

```jsx
<div style={{ display: "flex", gap: "8px" }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="text">Text</Button>
</div>
```

### Button Sizes

```jsx
<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</div>
```

### Loading State

```jsx
<div style={{ display: "flex", gap: "8px" }}>
  <Button loading variant="primary">
    Loading Primary
  </Button>
  <Button loading variant="secondary">
    Loading Secondary
  </Button>
  <Button loading variant="outline">
    Loading Outline
  </Button>
</div>
```

### Disabled State

```jsx
<div style={{ display: "flex", gap: "8px" }}>
  <Button disabled variant="primary">
    Disabled Primary
  </Button>
  <Button disabled variant="secondary">
    Disabled Secondary
  </Button>
  <Button disabled variant="outline">
    Disabled Outline
  </Button>
</div>
```

### Full Width

```jsx
<Button fullWidth variant="primary">
  Full Width Button
</Button>
```

## Implementation Details

The Button component includes several features:

- Smooth loading animation with size-appropriate spinners
- Variant-specific loading spinner colors
- Consistent heights across sizes
- Proper disabled state handling
- Click prevention during loading
- Smooth transitions and hover effects

```jsx
// Internal structure
<button className="fancy-button ...">
  <span className="button-content">{children}</span>
  {loading && <span className="button-loader" />}
</button>
```

## Common Use Cases

Highlight typical scenarios where the button might be used:

- Form submissions
- Action triggers
- Navigation actions
- Dialog controls
- Data operations

## Customization

You can customize the button appearance using CSS:

```css
/* Custom primary variant */
.fancy-button.primary {
  background-color: #ff4081;
  color: white;
}

/* Custom size */
.fancy-button.custom-size {
  padding: 10px 20px;
  font-size: 16px;
}
```

## Best Practices

1. **Loading States**: Use loading state for async operations
2. **Consistent Sizing**: Maintain consistent button sizes in your application
3. **Clear Labels**: Use clear and action-oriented button text
4. **Color Contrast**: Ensure sufficient contrast for accessibility
5. **Feedback**: Provide visual feedback for interactions

## Troubleshooting

Common issues and solutions:

- **Button jumps during loading**: Check if content has consistent height
- **Spinner not visible**: Ensure contrast with button background
- **Inconsistent sizing**: Use the same size prop for related buttons
- **Click handlers not working**: Verify not disabled or loading
- **Styles not applying**: Check className and CSS specificity
