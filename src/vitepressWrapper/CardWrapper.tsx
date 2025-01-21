import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Card from "../previewComponents/Card/Card";
import Button from "../previewComponents/Button/Button";

const CardDemo = () => {
  return (
    <div className="demo-wrapper">
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Card Variants
      </h3>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Default Card" variant="default" style={{ width: "200px" }}>
          Default variant with shadow
        </Card>
        <Card
          title="Elevated Card"
          variant="elevated"
          style={{ width: "200px" }}
        >
          Elevated variant with stronger shadow
        </Card>
        <Card
          title="Outlined Card"
          variant="outlined"
          style={{ width: "200px" }}
        >
          Outlined variant with border
        </Card>
        <Card title="Filled Card" variant="filled" style={{ width: "200px" }}>
          Filled variant with background
        </Card>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        With Cover Image
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Card
          title="Card with Cover"
          style={{ maxWidth: "300px" }}
          cover={
            <img
              src="https://picsum.photos/300/200"
              alt="Example"
              style={{ objectFit: "cover" }}
            />
          }
        >
          Content below the cover image
        </Card>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        With Actions
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Card
          title="Interactive Card"
          style={{ maxWidth: "300px" }}
          actions={
            <>
              <Button size="small">Cancel</Button>
              <Button variant="primary" size="small">
                Submit
              </Button>
            </>
          }
        >
          Card with action buttons
        </Card>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        With Extra Content
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Card
          title="Card with Extra"
          style={{ maxWidth: "300px" }}
          extra={<Button variant="text">More</Button>}
        >
          Card with extra content in header
        </Card>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Hoverable Card
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Card
          title="Hoverable Card"
          hoverable
          style={{ maxWidth: "300px" }}
          subtitle="This is a subtitle"
        >
          This card has a hover effect. Try hovering over it to see the
          animation.
        </Card>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Complex Example
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Card
          title="Complex Card"
          subtitle="With multiple features"
          style={{ maxWidth: "300px" }}
          hoverable
          variant="elevated"
          cover={
            <img
              src="https://picsum.photos/300/200"
              alt="Example"
              style={{ objectFit: "cover" }}
            />
          }
          extra={<Button variant="text">Share</Button>}
          actions={
            <>
              <Button size="small">Save</Button>
              <Button variant="primary" size="small">
                View Details
              </Button>
            </>
          }
        >
          This card demonstrates multiple features combined together.
        </Card>
      </div>
    </div>
  );
};

export default defineComponent({
  name: "CardWrapper",
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
      root.render(<CardDemo />);

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
