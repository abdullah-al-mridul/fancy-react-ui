import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Button from "../previewComponents/Button/Button";

const ButtonDemo = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="demo-wrapper">
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Button Variants
      </h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Button Sizes
      </h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Loading State
      </h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
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

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Interactive Example
      </h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <Button variant="primary" loading={loading} onClick={handleClick}>
          {loading ? "Loading..." : "Click to Load"}
        </Button>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Disabled State
      </h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
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

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Full Width
      </h3>
      <Button fullWidth variant="primary" style={{ marginBottom: "24px" }}>
        Full Width Button
      </Button>
    </div>
  );
};

export default defineComponent({
  name: "ButtonWrapper",
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
      root.render(<ButtonDemo />);

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
