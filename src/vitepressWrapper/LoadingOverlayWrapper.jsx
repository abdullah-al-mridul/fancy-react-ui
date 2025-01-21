import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import LoadingOverlay from "../previewComponents/LoadingOverlay/LoadingOverlay";

export default defineComponent({
  name: "LoadingOverlay",
  setup() {
    const containerRef = ref(null);
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
        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          <LoadingOverlay
            isLoading={true}
            spinnerSize={60}
            spinnerColor="#FF5722"
            spinnerProps={{
              type: "GlitchSpinner",
            }}
            backgroundColor="rgba(0, 0, 0, 0.5)"
          />
        </div>
      );

      // Cleanup
      return () => observer.disconnect();
    });

    return () =>
      h("div", {
        ref: containerRef,
        style: {
          minHeight: "200px",
          backgroundColor: isDark.value ? "#161618" : "#F6F6F7",
          borderRadius: "10px",
          marginTop: "20px",
          width: "100%",
        },
      });
  },
});
