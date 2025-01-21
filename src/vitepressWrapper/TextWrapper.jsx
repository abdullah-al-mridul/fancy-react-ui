import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
// import { useData } from "vitepress/client";
import TextSpinner from "../previewComponents/TextSpinner/TextSpinner";
import Button from "../previewComponents/Button/Button";

const TextSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#9933ff",
      speed: 0.8,
      text: "Loading",
    },
    small: {
      size: 30,
      color: "#E91E63",
      speed: 0.6,
      text: "Wait",
    },
    large: {
      size: 90,
      color: "#00BCD4",
      speed: 1,
      text: "Processing",
    },
    slow: {
      size: 60,
      color: "#8BC34A",
      speed: 2,
      text: "Please wait",
      letterSpacing: "0.2em",
    },
    fast: {
      size: 60,
      color: "#FF5722",
      speed: 0.4,
      text: "Loading...",
    },
    styled: {
      size: 60,
      color: "#673AB7",
      speed: 0.8,
      text: "LOADING",
      fontWeight: "bold",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
    },
    // gradient: {
    //   size: 60,
    //   color: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
    //   speed: 0.8,
    //   text: "Processing",
    //   letterSpacing: "0.1em",
    // },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {Object.keys(variants).map((variant) => (
          <Button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            variant={selectedVariant === variant ? "primary" : "secondary"}
            size="small"
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "120px",
        }}
      >
        <TextSpinner {...variants[selectedVariant]} />
      </div>

      <div
        style={{
          padding: "12px",
          borderRadius: "6px",
          background: "var(--vp-c-bg-soft)",
        }}
      >
        <pre style={{ margin: 0 }}>
          <code>
            {`<TextSpinner
  ${Object.entries(variants[selectedVariant])
    .map(
      ([key, value]) =>
        `${key}={${typeof value === "string" ? `"${value}"` : value}}`
    )
    .join("\n  ")}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default defineComponent({
  name: "TextSpinner",
  setup() {
    const containerRef = ref();
    // const { isDark } = useData();
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
      root.render(<TextSpinnerDemo />);

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
