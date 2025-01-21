import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
// import { useData } from "vitepress";
import ChaseSpinner from "../previewComponents/ChaseSpinner/ChaseSpinner";
import Button from "../previewComponents/Button/Button";

const ChaseSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#4CAF50",
      speed: 0.8,
    },
    small: {
      size: 30,
      color: "#2196F3",
      speed: 0.6,
    },
    large: {
      size: 90,
      color: "#FF5722",
      speed: 1,
    },
    slow: {
      size: 60,
      color: "#9C27B0",
      speed: 2,
    },
    fast: {
      size: 60,
      color: "#FFC107",
      speed: 0.4,
    },
    // multicolor: {
    //   size: 60,
    //   color: ["#f44336", "#2196f3", "#4caf50", "#ff9800"],
    //   speed: 0.8,
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
        <ChaseSpinner {...variants[selectedVariant]} />
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
            {`<ChaseSpinner
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
  name: "ChaseSpinner",
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
      root.render(<ChaseSpinnerDemo />);

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
