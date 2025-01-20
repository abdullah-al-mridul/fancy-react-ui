---
outline: deep
---

# Border Spinner

This page demonstrates the `BorderSpinner` component. The spinner can be used as a loading indicator in your applications.

## Usage Example

To render the `BorderSpinner`, simply include it in your JSX as shown below:

```jsx
import { BorderSpinner } from "fancy-loader-react";

function App() {
  return (
    <div>
      <BorderSpinner />
    </div>
  );
}
```

Output:

<ReactWrapper />

## Props

The following table describes the props that the `BorderSpinner` component accepts:

| Prop Name        | Default Value        | Type     | Description                                                                |
| ---------------- | -------------------- | -------- | -------------------------------------------------------------------------- |
| `size`           | `40`                 | `number` | Sets the size of the spinner.                                              |
| `color`          | `#0066ff`            | `string` | Sets the color of the spinner. Accepts any valid CSS color value.          |
| `secondaryColor` | `rgba(0, 0, 0, 0.1)` | `string` | Sets the secondary color of the spinner.                                   |
| `speed`          | `0.8`                | `number` | Sets the animation speed of the spinner. Accepts any valid CSS time value. |
| `thickness`      | `4`                  | `number` | Specifies the thickness of the spinner's line.                             |
| `className`      | `null`               | `string` | Applies custom CSS classes to the spinner for additional styling.          |

> [!TIP]  
> All the listed props are optional. You can use them to customize the `BorderSpinner` to suit your application's needs.

## Customization Example

Show how developers can customize the spinner using props or by overriding styles with CSS.

```jsx
<BorderSpinner
  size={60}
  color="#ff6600"
  speed={1.2}
  className="my-custom-spinner"
/>
```

CSS for `.my-custom-spinner`:

```css
.my-custom-spinner {
  border-radius: 50%;
}
```

## Common Use Cases

Highlight typical scenarios where the spinner might be used:

- Loading content (e.g., fetching data).
- During page transitions.
- As a visual placeholder for asynchronous operations.

## Troubleshooting

Address potential issues developers might encounter, like:

- Spinner not displaying (ensure size and color are valid).
- Performance tips if the spinner causes rendering lag.

## Related Components

Explore similar components within the same library or ecosystem to find the best fit for your use case:

- [Chase Spinner](/chase-spinner.html): A dynamic spinner with a unique chasing dots animation.
