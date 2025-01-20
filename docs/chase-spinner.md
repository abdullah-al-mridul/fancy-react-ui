---
outline: deep
---

# Chase Spinner

The `ChaseSpinner` component creates a dynamic loading animation with multiple dots chasing each other in a circular pattern.

## Basic Usage

```jsx
import { ChaseSpinner } from "fancy-loader-react";

function App() {
  return <ChaseSpinner />;
}
```

Live Demo:

<ChaseWrapper />

## Props

The following table describes the props that the `ChaseSpinner` component accepts:

| Prop Name   | Default Value | Type     | Description                                                                |
| ----------- | ------------- | -------- | -------------------------------------------------------------------------- |
| `size`      | `40`          | `number` | Sets the size of the spinner.                                              |
| `color`     | `#0066ff`     | `string` | Sets the color of the spinner. Accepts any valid CSS color value.          |
| `speed`     | `0.8`         | `number` | Sets the animation speed of the spinner. Accepts any valid CSS time value. |
| `className` | `null`        | `string` | Applies custom CSS classes to the spinner for additional styling.          |

> [!TIP]  
> All the listed props are optional. You can use them to customize the `ChaseSpinner` to suit your application's needs.

## Customization Example

Show how developers can customize the spinner using props or by overriding styles with CSS.

```jsx
<ChaseSpinner
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

- [Border Spinner](/explore-loaders.html): A dynamic spinner with a unique border animation.
