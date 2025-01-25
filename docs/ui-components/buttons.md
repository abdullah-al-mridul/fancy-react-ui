---
outline: deep
---

# Button

The Button component is a versatile and customizable button that supports multiple variants, types, states, and animations.

## Import

```jsx
import { Button } from "fancy-react-ui";
```

## Live Demo

<ButtonWrapper />

## Props

| Prop Name       | Type                                                                         | Default     | Description               |
| --------------- | ---------------------------------------------------------------------------- | ----------- | ------------------------- |
| `text`          | `string`                                                                     | `"Button"`  | Button text content       |
| `variant`       | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"default"` | Button color variant      |
| `variantType`   | `"solid" \| "outline" \| "link"`                                             | `"solid"`   | Button style type         |
| `size`          | `"small" \| "medium" \| "large" \| number`                                   | `"medium"`  | Button size               |
| `weight`        | `"normal" \| "medium" \| "semibold" \| "bold"`                               | `"medium"`  | Text weight               |
| `isLoading`     | `boolean`                                                                    | `false`     | Shows loading spinner     |
| `disabled`      | `boolean`                                                                    | `false`     | Disables the button       |
| `href`          | `string`                                                                     | -           | Opens link in new tab     |
| `disableShine`  | `boolean`                                                                    | `false`     | Disables shine animation  |
| `disableBorder` | `boolean`                                                                    | `false`     | Disables border animation |
| `style`         | `React.CSSProperties`                                                        | `{}`        | Additional inline styles  |
| `onClick`       | `(e: React.MouseEvent<HTMLButtonElement>) => void`                           | -           | Click handler             |

## Basic Usage

### Solid Variants

```jsx
<Button text="Default" variant="default" />
<Button text="Primary" variant="primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Success" variant="success" />
<Button text="Warning" variant="warning" />
<Button text="Error" variant="error" />
```

### Outline Variants

```jsx
<Button text="Default" variant="default" variantType="outline" />
<Button text="Primary" variant="primary" variantType="outline" />
<Button text="Secondary" variant="secondary" variantType="outline" />
<Button text="Success" variant="success" variantType="outline" />
<Button text="Warning" variant="warning" variantType="outline" />
<Button text="Error" variant="error" variantType="outline" />
```

### Link Variants

```jsx
<Button text="Default" variant="default" variantType="link" />
<Button text="Primary" variant="primary" variantType="link" />
<Button text="Secondary" variant="secondary" variantType="link" />
<Button text="Success" variant="success" variantType="link" />
<Button text="Warning" variant="warning" variantType="link" />
<Button text="Error" variant="error" variantType="link" />
```

### Sizes

```jsx
<Button text="Small" size="small" />
<Button text="Medium" size="medium" />
<Button text="Large" size="large" />
<Button text="Custom" size={30} />
```

### Loading States

```jsx
// Solid Loading
<Button text="Loading" variant="primary" isLoading />

// Outline Loading
<Button text="Loading" variant="primary" variantType="outline" isLoading />

// Link Loading
<Button text="Loading" variant="primary" variantType="link" isLoading />
```

### Disabled States

```jsx
// Solid Disabled
<Button text="Disabled" variant="primary" disabled />

// Outline Disabled
<Button text="Disabled" variant="primary" variantType="outline" disabled />

// Link Disabled
<Button text="Disabled" variant="primary" variantType="link" disabled />
```

### With href

```jsx
<Button
  text="Visit Website"
  variant="primary"
  href="https://example.com"
/>

<Button
  text="Documentation"
  variant="primary"
  variantType="outline"
  href="https://example.com/docs"
/>

<Button
  text="Learn More"
  variant="primary"
  variantType="link"
  href="https://example.com/learn"
/>
```

### Interactive Loading Example

```jsx
function App() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await someAsyncOperation();
    setLoading(false);
  };

  return (
    <Button
      text={loading ? "Loading..." : "Click Me"}
      variant="primary"
      isLoading={loading}
      onClick={handleClick}
    />
  );
}
```

## Features

- **Multiple Variants**: Six color variants (default, primary, secondary, success, warning, error)
- **Style Types**: Three style types (solid, outline, link)
- **Loading States**: Customized loading spinners for each variant and type
- **Disabled States**: Proper disabled styling with cursor handling
- **Size Options**: Predefined sizes and custom size support
- **Animations**:
  - Shine effect (can be disabled)
  - Border animation (can be disabled)
  - Loading spinner
  - Hover transitions
- **External Links**: Support for opening links in new tabs
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Customization**: Extensive style customization options

## Best Practices

1. **Loading State**: Use loading state for async operations to prevent multiple submissions
2. **Variant Usage**:
   - `primary`: Main actions
   - `secondary`: Alternative actions
   - `success`: Positive actions
   - `warning`: Cautionary actions
   - `error`: Destructive actions
3. **Type Selection**:
   - `solid`: Primary actions
   - `outline`: Secondary actions
   - `link`: Tertiary actions or navigation
4. **Accessibility**: Provide meaningful text for screen readers
5. **Sizing**: Use consistent sizes within the same context

## Customization

### Custom Styling

```jsx
<Button
  text="Custom Button"
  style={{
    backgroundColor: "#ff4081",
    borderRadius: "20px",
    padding: "12px 24px",
  }}
/>
```

### Disable Animations

```jsx
<Button text="No Animations" disableShine disableBorder />
```

## TypeScript Support

The Button component is fully typed with TypeScript, providing proper type checking and autocompletion for all props.
