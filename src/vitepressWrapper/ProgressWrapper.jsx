import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Progress from "../previewComponents/Progress/Progress";
import Button from "../previewComponents/Button/Button";

const ProgressDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      value: 75,
      backgroundColor: "#2196F3",
      height: 20,
      color: "#000000",
      showLabel: true,
      showPercentage: true,
    },
    small: {
      value: 45,
      backgroundColor: "#FF5722",
      height: 10,
      color: "#FFFFFF",
      showLabel: false,
      showPercentage: true,
    },
    large: {
      value: 90,
      backgroundColor: "#4CAF50",
      height: 30,
      color: "#FFFFFF",
      showLabel: true,
      showPercentage: true,
      striped: true,
    },
    striped: {
      value: 60,
      backgroundColor: "#9C27B0",
      height: 20,
      color: "#FFFFFF",
      striped: true,
      showLabel: true,
      showPercentage: true,
    },
    animated: {
      value: 85,
      backgroundColor: "#FFC107",
      height: 20,
      color: "#000000",
      striped: true,
      animated: true,
      showLabel: true,
      showPercentage: true,
    },
    custom: {
      value: 70,
      backgroundColor: "#E91E63",
      height: 25,
      color: "#FFFFFF",
      striped: true,
      animated: true,
      showLabel: true,
      showPercentage: true,
      label: "Loading...",
      borderRadius: 15,
    },
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
          minHeight: "60px",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <Progress {...variants[selectedVariant]} />
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
            {`<Progress
  ${Object.entries(variants[selectedVariant])
    .map(
      ([key, value]) =>
        `${key}={${
          typeof value === "string"
            ? `"${value}"`
            : typeof value === "boolean"
            ? value
            : value
        }}`
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
  name: "Progress",
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
      root.render(<ProgressDemo />);

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
          minHeight: "100px",
          backgroundColor: isDark.value ? "#161618" : "#F6F6F7",
          borderRadius: "10px",
          marginTop: "20px",
          width: "100%",
        },
      });
  },
});
