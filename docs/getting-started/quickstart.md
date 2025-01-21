---
outline: deep
---

# Quick Start

Get started with Fancy ReactUI in your React project.

## Setup

1. Install the package:

```bash
pnpm add fancy-react-ui
```

2. Import components:

```jsx
import { Button, Form, Input, Table, Modal, WaveSpinner } from "fancy-react-ui";
```

## Basic Examples

### Loading Spinners

```jsx
import { WaveSpinner, LoadingOverlay } from "fancy-react-ui";

function LoadingExample() {
  return (
    <div>
      <WaveSpinner size={40} color="#2196F3" />
      <LoadingOverlay loading={isLoading}>Content</LoadingOverlay>
    </div>
  );
}
```

### Forms

```jsx
import { Form, Input, Button } from "fancy-react-ui";

function LoginForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        label="Email"
        rules={{ required: true, type: "email" }}
      />
      <Input
        name="password"
        type="password"
        label="Password"
        rules={{ required: true }}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
}
```

### Data Tables

```jsx
import { Table } from "fancy-react-ui";

function UserTable() {
  const columns = [
    {
      key: "name",
      title: "Name",
      sortable: true,
    },
    {
      key: "email",
      title: "Email",
    },
  ];

  return (
    <Table columns={columns} dataSource={users} pagination={{ pageSize: 10 }} />
  );
}
```

### Modals

```jsx
import { Modal, Button } from "fancy-react-ui";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        Modal content goes here
      </Modal>
    </>
  );
}
```

## TypeScript Usage

```tsx
import { Button, Form, type ButtonProps, type FormProps } from "fancy-react-ui";

interface LoginFormProps extends FormProps {
  onSuccess: (data: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, ...props }) => {
  return (
    <Form onSubmit={onSuccess} {...props}>
      {/* Form fields */}
    </Form>
  );
};
```

## Best Practices

1. **Component Organization**

   ```jsx
   import { Card, Form, Input, Button } from "fancy-react-ui";

   function UserForm() {
     return (
       <Card>
         <Form>
           <Input name="name" label="Name" />
           <Button type="submit">Save</Button>
         </Form>
       </Card>
     );
   }
   ```

2. **Loading States**

   ```jsx
   function DataView() {
     const [loading, setLoading] = useState(true);

     return (
       <LoadingOverlay loading={loading}>
         <Table columns={columns} dataSource={data} />
       </LoadingOverlay>
     );
   }
   ```

3. **Form Validation**
   ```jsx
   <Form onSubmit={handleSubmit} onError={handleError}>
     <Input
       name="email"
       rules={{
         required: true,
         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       }}
     />
   </Form>
   ```

## Next Steps

- Explore [UI Components](/ui-components/buttons)
- Check out [Loading Animations](/loaders/explore-loaders)
- Read about [Form Validation](/ui-components/forms)
- Learn about [Table Features](/ui-components/tables)
