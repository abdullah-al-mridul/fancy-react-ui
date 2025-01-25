import React from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Button from "../sandbox/Button/Button";

const ButtonDemo = () => {
  const [loading, setLoading] = React.useState(false);

  const h3Style = {
    marginBottom: "20px",
  };

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="demo-wrapper">
      {/* Solid Variants */}
      <h3 style={h3Style}>Solid Variants</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button text="Default" variant="default" />
        <Button text="Primary" variant="primary" />
        <Button text="Secondary" variant="secondary" />
        <Button text="Success" variant="success" />
        <Button text="Warning" variant="warning" />
        <Button text="Error" variant="error" />
      </div>

      {/* Outline Variants */}
      <h3 style={h3Style}>Outline Variants</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button text="Default" variant="default" variantType="outline" />
        <Button text="Primary" variant="primary" variantType="outline" />
        <Button text="Secondary" variant="secondary" variantType="outline" />
        <Button text="Success" variant="success" variantType="outline" />
        <Button text="Warning" variant="warning" variantType="outline" />
        <Button text="Error" variant="error" variantType="outline" />
      </div>

      {/* Link Variants */}
      <h3 style={h3Style}>Link Variants</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button text="Default" variant="default" variantType="link" />
        <Button text="Primary" variant="primary" variantType="link" />
        <Button text="Secondary" variant="secondary" variantType="link" />
        <Button text="Success" variant="success" variantType="link" />
        <Button text="Warning" variant="warning" variantType="link" />
        <Button text="Error" variant="error" variantType="link" />
      </div>

      {/* Loading States */}
      <h3 style={h3Style}>Loading States</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button text="Solid Loading" variant="primary" isLoading />
        <Button
          text="Outline Loading"
          variant="primary"
          variantType="outline"
          isLoading
        />
        <Button
          text="Link Loading"
          variant="primary"
          variantType="link"
          isLoading
        />
      </div>

      {/* Disabled States */}
      <h3 style={h3Style}>Disabled States</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button text="Solid Disabled" variant="primary" disabled />
        <Button
          text="Outline Disabled"
          variant="primary"
          variantType="outline"
          disabled
        />
        <Button
          text="Link Disabled"
          variant="primary"
          variantType="link"
          disabled
        />
      </div>

      {/* Sizes */}
      <h3 style={h3Style}>Sizes</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button text="Small" size="small" variant="primary" />
        <Button text="Medium" size="medium" variant="primary" />
        <Button text="Large" size="large" variant="primary" />
        <Button text="Custom (30px)" size={30} variant="primary" />
      </div>

      {/* Interactive Example */}
      <h3 style={h3Style}>Interactive Example</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button
          text={loading ? "Loading..." : "Click to Load"}
          variant="primary"
          isLoading={loading}
          onClick={handleClick}
        />
        <Button
          text={loading ? "Loading..." : "Outline Click"}
          variant="primary"
          variantType="outline"
          isLoading={loading}
          onClick={handleClick}
        />
        <Button
          text={loading ? "Loading..." : "Link Click"}
          variant="primary"
          variantType="link"
          isLoading={loading}
          onClick={handleClick}
        />
      </div>

      {/* With href */}
      <h3 style={h3Style}>With href</h3>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Button
          text="Solid Link"
          variant="primary"
          href="https://example.com"
        />
        <Button
          text="Outline Link"
          variant="primary"
          variantType="outline"
          href="https://example.com"
        />
        <Button
          text="Link Type"
          variant="primary"
          variantType="link"
          href="https://example.com"
        />
      </div>
    </div>
  );
};

export default defineComponent({
  name: "ButtonWrapper",
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
      root.render(<ButtonDemo />);

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
