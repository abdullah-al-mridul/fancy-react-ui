---
outline: deep
---

# Card

The Card component provides a flexible container for displaying content with various styles and features.

## Basic Usage

```jsx
import { Card } from "fancy-react-ui";

function App() {
  return <Card title="Card Title">This is the content of the card.</Card>;
}
```

Live Demo:

<CardWrapper />

## Props

| Prop Name   | Type                                                | Default     | Description             |
| ----------- | --------------------------------------------------- | ----------- | ----------------------- |
| `title`     | `ReactNode`                                         | -           | Card title              |
| `subtitle`  | `ReactNode`                                         | -           | Card subtitle           |
| `variant`   | `"default" \| "elevated" \| "outlined" \| "filled"` | `"default"` | Card style variant      |
| `hoverable` | `boolean`                                           | `false`     | Enable hover effect     |
| `bordered`  | `boolean`                                           | `true`      | Show border             |
| `cover`     | `ReactNode`                                         | -           | Cover image/content     |
| `extra`     | `ReactNode`                                         | -           | Extra content in header |
| `actions`   | `ReactNode`                                         | -           | Action buttons          |

## Examples

### Card Variants

```jsx
<div style={{ display: "flex", gap: "16px" }}>
  <Card title="Default Card" variant="default">
    Default variant with shadow
  </Card>
  <Card title="Elevated Card" variant="elevated">
    Elevated variant with stronger shadow
  </Card>
  <Card title="Outlined Card" variant="outlined">
    Outlined variant with border
  </Card>
  <Card title="Filled Card" variant="filled">
    Filled variant with background
  </Card>
</div>
```

### With Cover Image

```jsx
<Card
  title="Card with Cover"
  cover={<img src="/example-image.jpg" alt="Example" />}
>
  Content below the cover image
</Card>
```

### With Actions

```jsx
<Card
  title="Interactive Card"
  actions={
    <>
      <Button size="small">Cancel</Button>
      <Button variant="primary" size="small">
        Submit
      </Button>
    </>
  }
>
  Card with action buttons
</Card>
```

### With Extra Content

```jsx
<Card title="Card with Extra" extra={<Button variant="text">More</Button>}>
  Card with extra content in header
</Card>
```

### Hoverable Card

```jsx
<Card title="Hoverable Card" hoverable>
  This card has a hover effect
</Card>
```

## Customization

You can customize the card appearance using CSS variables:

```css
.fancy-card {
  --card-bg: #ffffff;
  --card-filled-bg: #f5f5f5;
  --card-border-color: rgba(0, 0, 0, 0.12);
  --card-hover-border-color: rgba(0, 0, 0, 0.2);
  --card-title-color: #1f2937;
  --card-subtitle-color: #6b7280;
  --card-text-color: #374151;
}
```

## Best Practices

1. **Content Structure**: Use appropriate props (title, subtitle, actions) for clear content hierarchy
2. **Variant Selection**: Choose variants based on visual hierarchy needs
3. **Hover Effects**: Use hoverable prop for interactive cards
4. **Responsive Design**: Consider card layout on different screen sizes
5. **Accessibility**: Ensure proper contrast and semantic structure

## Common Use Cases

- Product displays
- Feature highlights
- User profiles
- Settings panels
- Dashboard widgets
- Content previews

## Troubleshooting

Common issues and solutions:

- **Card height inconsistency**: Set explicit height or use flex layout
- **Cover image aspect ratio**: Use appropriate CSS for image sizing
- **Action buttons alignment**: Use flex utilities in actions container
- **Dark mode contrast**: Use provided CSS variables for theming
- **Content overflow**: Check padding and content sizing
