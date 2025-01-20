import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import ChaseSpinner from "../previewComponents/ChaseSpinner/ChaseSpinner";

export default defineComponent({
  name: "ChaseSpinner",
  setup() {
    const containerRef = ref(null);

    onMounted(() => {
      const root = createRoot(containerRef.value);
      root.render(<ChaseSpinner />);
    });

    return () =>
      h("div", {
        ref: containerRef,
        style: {
          minHeight: "100px",
          backgroundColor: "#161618",
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
