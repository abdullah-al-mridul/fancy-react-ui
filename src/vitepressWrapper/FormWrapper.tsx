import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Form from "../previewComponents/Form/Form";
import Input from "../previewComponents/Form/Input";
import Button from "../previewComponents/Button/Button";

const FormDemo = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log("Form submitted:", values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="demo-wrapper">
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Login Form
      </h3>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          }}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          rules={{
            required: true,
            minLength: 8,
            message: "Password must be at least 8 characters",
          }}
        />
        <Button type="submit" variant="primary" style={{ marginTop: "16px" }}>
          Login
        </Button>
      </Form>

      <h3
        style={{
          marginBottom: "20px",
          marginTop: "40px",
        }}
      >
        Registration Form with Validation
      </h3>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          username: "john_doe",
        }}
      >
        <Input
          name="username"
          label="Username"
          placeholder="Choose a username"
          rules={{
            required: true,
            minLength: 3,
            pattern: /^[a-zA-Z0-9_]+$/,
            message:
              "Username must be at least 3 characters (letters, numbers, underscore)",
          }}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          }}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Create a password"
          rules={{
            required: true,
            validate: (value) =>
              value.length >= 8 || "Password must be at least 8 characters",
          }}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          rules={{
            required: true,
            validate: (value, values = {}) =>
              value === values.password || "Passwords must match",
          }}
        />
        <Button type="submit" variant="primary" style={{ marginTop: "16px" }}>
          Register
        </Button>
      </Form>

      <h3
        style={{
          marginBottom: "20px",
          marginTop: "40px",
        }}
      >
        Contact Form with Different Input Types
      </h3>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          rules={{ required: true }}
        />
        <Input
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="Enter your phone number"
          rules={{
            pattern: /^\+?[\d\s-]{10,}$/,
            message: "Please enter a valid phone number",
          }}
        />
        <Input
          name="age"
          type="number"
          label="Age"
          rules={{
            min: 18,
            message: "You must be at least 18 years old",
          }}
        />
        <Button type="submit" variant="primary" style={{ marginTop: "16px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default defineComponent({
  name: "FormWrapper",
  setup() {
    const containerRef = ref();
    const isDark = ref(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      isDark.value = document.documentElement.classList.contains("dark");
    });

    onMounted(() => {
      // Observe theme changes
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      const root = createRoot(containerRef.value);
      root.render(<FormDemo />);

      // Cleanup
      return () => {
        observer.disconnect();
        root.unmount();
      };
    });

    return () =>
      h("div", {
        ref: containerRef,
        style: {
          backgroundColor: isDark.value ? "#161618" : "#F6F6F7",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        },
      });
  },
});
