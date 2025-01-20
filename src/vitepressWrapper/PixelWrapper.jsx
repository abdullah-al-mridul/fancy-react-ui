import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h, watch } from "vue";
// import { useData } from "vitepress";
import PixelSpinner from "../previewComponents/PixelSpinner/PixelSpinner";

export default defineComponent({
  name: "PixelSpinner",
  setup() {
    const containerRef = ref(null);
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
      root.render(
        <PixelSpinner
          size={60}
          color="#F9776A"
          text="SAVING"
          speed={0.8}
          pixelSize={6}
        />
      );

      // Cleanup
      return () => observer.disconnect();
    });

    return () =>
      h("div", {
        ref: containerRef,
        style: {
          minHeight: "100px",
          backgroundColor: isDark.value ? "#161618" : "#F6F6F7",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          display: "flex",
          width: "100%",
        },
      });
  },
});
