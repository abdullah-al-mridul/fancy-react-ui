import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import RotatingSpinner from "../previewComponents/RotatingSpinner/RotatingSpinner";
import Button from "../previewComponents/Button/Button";

const RotatingSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#3F51B5",
      speed: 1,
    },
    small: {
      size: 30,
      color: "#E91E63",
      speed: 0.8,
      thickness: 2,
    },
    large: {
      size: 90,
      color: "#009688",
      speed: 1.2,
      thickness: 6,
    },
    slow: {
      size: 60,
      color: "#673AB7",
      speed: 2,
      thickness: 4,
      rotationStyle: "ease-in-out",
    },
    fast: {
      size: 60,
      color: "#FF9800",
      speed: 0.5,
      thickness: 4,
      rotationStyle: "linear",
    },
    // multicolor: {
    //   size: 60,
    //   color: ["#FF9800", "#F44336", "#2196F3", "#4CAF50"],
    //   speed: 1,
    //   thickness: 4,
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
        <RotatingSpinner {...variants[selectedVariant]} />
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
            {`<RotatingSpinner
  ${Object.entries(variants[selectedVariant])
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}={[${value.map((v) => `"${v}"`).join(", ")}]}`;
      }
      return `${key}={${typeof value === "string" ? `"${value}"` : value}}`;
    })
    .join("\n  ")}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default defineComponent({
  name: "RotatingSpinner",
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
      root.render(<RotatingSpinnerDemo />);

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
