---
outline: deep
---

# Modal

The Modal component provides a flexible overlay dialog for displaying content, alerts, and forms.

## Basic Usage

```jsx
import { Modal, Button } from "fancy-react-ui";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Modal"
      >
        This is a basic modal dialog
      </Modal>
    </>
  );
}
```

Live Demo:

<ModalWrapper />

## Props

| Prop Name        | Type                       | Default    | Description                      |
| ---------------- | -------------------------- | ---------- | -------------------------------- |
| `isOpen`         | `boolean`                  | Required   | Controls modal visibility        |
| `onClose`        | `() => void`               | Required   | Called when modal should close   |
| `title`          | `ReactNode`                | -          | Modal title                      |
| `children`       | `ReactNode`                | Required   | Modal content                    |
| `footer`         | `ReactNode`                | -          | Footer content (usually actions) |
| `size`           | `small \| medium \| large` | `"medium"` | Predefined modal sizes           |
| `closable`       | `boolean`                  | `true`     | Show close button                |
| `closeOnOverlay` | `boolean`                  | `true`     | Close when clicking overlay      |
| `centered`       | `boolean`                  | `true`     | Center modal vertically          |
| `width`          | `number \| string`         | -          | Custom modal width               |

## Examples

### Different Sizes

```jsx
<>
  <Modal size="small" title="Small Modal">
    Small modal content
  </Modal>

  <Modal size="medium" title="Medium Modal">
    Medium modal content
  </Modal>

  <Modal size="large" title="Large Modal">
    Large modal content
  </Modal>
</>
```

### With Footer Actions

```jsx
<Modal
  title="Confirm Action"
  footer={
    <>
      <Button onClick={onClose}>Cancel</Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </>
  }
>
  Are you sure you want to proceed?
</Modal>
```

### Custom Width

```jsx
<Modal width={800} title="Custom Width">
  This modal has a custom width of 800px
</Modal>
```

### Form in Modal

```jsx
<Modal
  title="Login"
  footer={
    <Button type="submit" form="login-form" variant="primary">
      Login
    </Button>
  }
>
  <Form id="login-form" onSubmit={handleLogin}>
    <Input name="email" label="Email" type="email" rules={{ required: true }} />
    <Input
      name="password"
      label="Password"
      type="password"
      rules={{ required: true }}
    />
  </Form>
</Modal>
```

### Non-Centered Modal

```jsx
<Modal centered={false} title="Top Modal">
  This modal appears at the top of the viewport
</Modal>
```

## Customization

You can customize the modal appearance using CSS variables:

```css
.modal {
  --modal-bg: #ffffff;
  --modal-border-color: rgba(0, 0, 0, 0.1);
  --modal-title-color: #1f2937;
  --modal-text-color: #374151;
  --modal-close-color: #6b7280;
  --modal-close-hover-color: #1f2937;
}
```

## Best Practices

1. **Accessibility**

   - Use descriptive titles
   - Ensure keyboard navigation works
   - Maintain focus management
   - Provide proper ARIA attributes

2. **Content Organization**

   - Keep content concise
   - Use appropriate modal size
   - Group related actions in footer
   - Maintain consistent spacing

3. **User Experience**

   - Provide clear close actions
   - Use appropriate animations
   - Handle background scrolling
   - Consider mobile viewports

4. **Performance**
   - Clean up event listeners
   - Use portals for rendering
   - Manage modal state efficiently
   - Handle unmounting properly

## Common Use Cases

- Confirmation dialogs
- Form submissions
- Detail views
- Image previews
- Alert messages
- User onboarding
- Settings panels

## Troubleshooting

Common issues and solutions:

- **Modal not closing**: Check `onClose` handler and overlay click settings
- **Scroll issues**: Verify body scroll lock implementation
- **Focus problems**: Ensure proper focus trap setup
- **Styling conflicts**: Check z-index values
- **Animation glitches**: Verify transition timings

## Examples

### Confirmation Dialog

```jsx
function ConfirmDialog({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Delete"
      size="small"
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={onConfirm}>
            Delete
          </Button>
        </>
      }
    >
      Are you sure you want to delete this item? This action cannot be undone.
    </Modal>
  );
}
```

### Image Preview

```jsx
function ImagePreview({ isOpen, onClose, imageUrl }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="large" closable centered>
      <img
        src={imageUrl}
        alt="Preview"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Modal>
  );
}
```

### Settings Panel

```jsx
function SettingsModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Settings"
      size="medium"
      footer={
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      }
    >
      <Form>
        <Input name="name" label="Display Name" />
        <Input name="email" label="Email" type="email" />
        {/* Other settings fields */}
      </Form>
    </Modal>
  );
}
```
