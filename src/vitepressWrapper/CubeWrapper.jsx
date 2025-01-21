import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import CubeSpinner from "../previewComponents/CubeSpinner/CubeSpinner";
import Button from "../previewComponents/Button/Button";

const CubeSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#2196F3",
      speed: 1.2,
    },
    small: {
      size: 30,
      color: "#FF5722",
      speed: 1,
      perspective: 400,
    },
    large: {
      size: 90,
      color: "#4CAF50",
      speed: 1.4,
      perspective: 800,
    },
    slow: {
      size: 60,
      color: "#9C27B0",
      speed: 2,
      perspective: 600,
    },
    fast: {
      size: 60,
      color: "#FFC107",
      speed: 0.8,
      perspective: 600,
    },
    // gradient: {
    //   size: 60,
    //   color: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)",
    //   speed: 1.2,
    //   perspective: 600,
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
        <CubeSpinner {...variants[selectedVariant]} />
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
            {`<CubeSpinner
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
  name: "CubeSpinner",
  setup() {
    const containerRef = ref();
    const isDark = ref(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      isDark.value = document.documentElement.classList.contains("dark");
    });

    onMounted(() => {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      const root = createRoot(containerRef.value);
      root.render(<CubeSpinnerDemo />);

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
