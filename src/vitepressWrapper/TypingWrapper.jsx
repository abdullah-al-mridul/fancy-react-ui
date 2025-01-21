import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import TypingSpinner from "../previewComponents/TypingSpinner/TypingSpinner";
import Button from "../previewComponents/Button/Button";

const TypingSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#3F51B5",
      speed: 1,
      text: "Loading",
    },
    small: {
      size: 30,
      color: "#E91E63",
      speed: 0.8,
      text: "Wait",
    },
    large: {
      size: 90,
      color: "#009688",
      speed: 1.2,
      text: "Processing",
    },
    slow: {
      size: 60,
      color: "#673AB7",
      speed: 2,
      text: "Please wait...",
      dotCount: 5,
    },
    fast: {
      size: 60,
      color: "#FF9800",
      speed: 0.5,
      text: "Loading",
      dotCount: 3,
    },
    // custom: {
    //   size: 60,
    //   color: "#F44336",
    //   speed: 1,
    //   text: "Uploading",
    //   dotColor: "#FFCDD2",
    //   dotCount: 4,
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
        <TypingSpinner {...variants[selectedVariant]} />
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
            {`<TypingSpinner
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
  name: "TypingSpinner",
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
      root.render(<TypingSpinnerDemo />);

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
