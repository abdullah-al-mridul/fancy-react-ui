import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
// import { useData } from "vitepress";
import PixelSpinner from "../previewComponents/PixelSpinner/PixelSpinner";
import Button from "../previewComponents/Button/Button";

const PixelSpinnerDemo = () => {
  const [selectedVariant, setSelectedVariant] = useState("default");

  const variants = {
    default: {
      size: 60,
      color: "#F9776A",
      text: "SAVING",
      speed: 0.8,
      pixelSize: 6,
    },
    small: {
      size: 30,
      color: "#3F51B5",
      text: "LOAD",
      speed: 0.6,
      pixelSize: 3,
    },
    large: {
      size: 90,
      color: "#009688",
      text: "PROCESSING",
      speed: 1,
      pixelSize: 8,
    },
    slow: {
      size: 60,
      color: "#673AB7",
      text: "WAIT",
      speed: 2,
      pixelSize: 6,
    },
    fast: {
      size: 60,
      color: "#FF9800",
      text: "LOADING",
      speed: 0.4,
      pixelSize: 6,
    },
    // custom: {
    //   size: 70,
    //   color: "#E91E63",
    //   text: "UPLOADING",
    //   speed: 0.8,
    //   pixelSize: 7,
    //   textColor: "#2196F3",
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
        <PixelSpinner {...variants[selectedVariant]} />
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
            {`<PixelSpinner
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
  name: "PixelSpinner",
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
      root.render(<PixelSpinnerDemo />);

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
