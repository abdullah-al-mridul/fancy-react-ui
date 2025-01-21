---
outline: deep
---

# Installation

## Package Installation

You can install Fancy ReactUI using your preferred package manager:

Using pnpm (recommended):

```bash
pnpm add fancy-react-ui
```

Using npm:

```bash
npm install fancy-react-ui
```

Using yarn:

```bash
yarn add fancy-react-ui
```

## Requirements

Fancy ReactUI has the following peer dependencies:

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}
```

## Basic Usage

After installation, you can import both loaders and UI components:

```jsx
import {
  // Loaders
  WaveSpinner,
  PixelSpinner,
  // UI Components
  Button,
  Table,
  Form,
  Modal,
  Card,
} from "fancy-react-ui";

function App() {
  return (
    <div>
      {/* Loaders */}
      <WaveSpinner />

      {/* UI Components */}
      <Button variant="primary">Click Me</Button>

      <Card>
        <Form onSubmit={handleSubmit}>
          <Input name="email" label="Email" />
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  );
}
```

## TypeScript Support

Fancy ReactUI includes built-in TypeScript type definitions:

```tsx
import {
  WaveSpinner,
  Button,
  Form,
  type WaveSpinnerProps,
  type ButtonProps,
  type FormProps,
} from "fancy-react-ui";

// Props will be properly typed
const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Framework Integration

### Next.js

```tsx
// app/loading.tsx
import { LoadingOverlay } from "fancy-react-ui";

export default function Loading() {
  return <LoadingOverlay />;
}

// app/page.tsx
import { Table, Card } from "fancy-react-ui";

export default function Page() {
  return (
    <Card>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
```

### Vite

```tsx
import { Modal, Button } from "fancy-react-ui";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Modal Content
      </Modal>
    </div>
  );
}
```

## CSS Imports

The library's styles are included in the package. No additional CSS imports are required.

## Troubleshooting

If you encounter any issues:

1. Verify peer dependencies
2. Clear package manager cache:
   ```bash
   pnpm store prune
   ```
3. Check React version compatibility
4. Ensure bundler supports ES modules

## Next Steps

- Explore the [Quick Start](/getting-started/quickstart) guide
- Check out [UI Components](/ui-components/buttons)
- Browse [Loading Animations](/loaders/explore-loaders)
