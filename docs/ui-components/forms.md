---
outline: deep
---

# Form

The Form component provides a flexible and powerful way to handle form state, validation, and submission.

## Basic Usage

```jsx
import { Form, Input } from "fancy-react-ui";

function App() {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="username" label="Username" rules={{ required: true }} />
      <Input
        name="email"
        type="email"
        label="Email"
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

Live Demo:

<FormWrapper />

## Props

| Prop Name       | Type                                       | Default | Description                            |
| --------------- | ------------------------------------------ | ------- | -------------------------------------- |
| `onSubmit`      | `(values: Record<string, any>) => void`    | -       | Called when form is valid & submitted  |
| `onError`       | `(errors: Record<string, string>) => void` | -       | Called when form has validation errors |
| `initialValues` | `Record<string, any>`                      | `{}`    | Initial form values                    |
| `children`      | `ReactNode`                                | -       | Form fields and other content          |

## Form Fields

### Input Field

```jsx
<Input
  name="username"
  label="Username"
  type="text"
  placeholder="Enter username"
  rules={{
    required: true,
    minLength: 3,
  }}
/>
```

#### Input Props

| Prop Name     | Type                                         | Default  | Description            |
| ------------- | -------------------------------------------- | -------- | ---------------------- |
| `name`        | `string`                                     | Required | Field identifier       |
| `label`       | `ReactNode`                                  | -        | Field label            |
| `type`        | `text \| password \| email \| number \| tel` | `"text"` | Input type             |
| `placeholder` | `string`                                     | -        | Input placeholder text |
| `rules`       | `FormValidationRule`                         | -        | Validation rules       |

## Validation Rules

The `rules` prop accepts an object with the following properties:

```typescript
type FormValidationRule = {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: any) => boolean | string;
  message?: string;
};
```

### Examples

#### Required Field

```jsx
<Input name="username" label="Username" rules={{ required: true }} />
```

#### Pattern Validation

```jsx
<Input
  name="email"
  type="email"
  label="Email"
  rules={{
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  }}
/>
```

#### Custom Validation

```jsx
<Input
  name="password"
  type="password"
  label="Password"
  rules={{
    validate: (value) =>
      value.length >= 8 || "Password must be at least 8 characters",
  }}
/>
```

## Form Submission

The form handles submission automatically and performs validation before calling `onSubmit`:

```jsx
<Form
  onSubmit={(values) => {
    console.log("Valid values:", values);
  }}
  onError={(errors) => {
    console.log("Validation errors:", errors);
  }}
>
  {/* form fields */}
</Form>
```

## Initial Values

You can provide initial values for form fields:

```jsx
<Form
  initialValues={{
    username: "john_doe",
    email: "john@example.com",
  }}
>
  <Input name="username" label="Username" />
  <Input name="email" label="Email" />
</Form>
```

## Styling

The form and its fields can be styled using CSS variables:

```css
.fancy-form {
  --form-bg: #ffffff;
  --form-border-color: #d1d5db;
  --form-text-color: #1f2937;
  --form-label-color: #374151;
  --form-focus-color: #3b82f6;
  --form-error-color: #dc2626;
}
```

## Best Practices

1. **Field Names**: Use unique names for each form field
2. **Validation Messages**: Provide clear error messages
3. **Initial Values**: Set initial values for pre-filled forms
4. **Error Handling**: Always handle validation errors
5. **Accessibility**: Include proper labels and aria attributes

## Common Use Cases

- User registration forms
- Login forms
- Contact forms
- Search forms
- Settings forms
- Data entry forms

## Troubleshooting

Common issues and solutions:

- **Validation not working**: Ensure rules are properly configured
- **Form not submitting**: Check for validation errors
- **Values not updating**: Verify field names match
- **Custom validation**: Return boolean or error message string
- **Initial values not showing**: Check field names match initialValues

## Examples

### Login Form

```jsx
<Form onSubmit={handleLogin}>
  <Input name="email" type="email" label="Email" rules={{ required: true }} />
  <Input
    name="password"
    type="password"
    label="Password"
    rules={{ required: true }}
  />
  <button type="submit">Login</button>
</Form>
```

### Registration Form

```jsx
<Form onSubmit={handleRegister}>
  <Input
    name="username"
    label="Username"
    rules={{
      required: true,
      minLength: 3,
    }}
  />
  <Input
    name="email"
    type="email"
    label="Email"
    rules={{
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    }}
  />
  <Input
    name="password"
    type="password"
    label="Password"
    rules={{
      required: true,
      validate: (value) =>
        value.length >= 8 || "Password must be at least 8 characters",
    }}
  />
  <button type="submit">Register</button>
</Form>
```
