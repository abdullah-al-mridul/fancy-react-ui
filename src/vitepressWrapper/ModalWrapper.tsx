import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Modal from "../previewComponents/Modal/Modal";
import Button from "../previewComponents/Button/Button";
import Form from "../previewComponents/Form/Form";
import Input from "../previewComponents/Form/Input";

const ModalDemo = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [sizeModal, setSizeModal] = useState<string | null>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  const handleFormSubmit = (values: Record<string, any>) => {
    alert(JSON.stringify(values, null, 2));
    setFormModal(false);
  };

  const handleConfirm = () => {
    alert("Action confirmed!");
    setConfirmModal(false);
  };

  return (
    <div className="demo-wrapper">
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Basic Modal
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => setBasicModal(true)}>Open Basic Modal</Button>
        <Modal
          isOpen={basicModal}
          onClose={() => setBasicModal(false)}
          title="Basic Modal"
        >
          <p>This is a basic modal dialog with a title and close button.</p>
        </Modal>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Different Sizes
      </h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <Button onClick={() => setSizeModal("small")}>Small Modal</Button>
        <Button onClick={() => setSizeModal("medium")}>Medium Modal</Button>
        <Button onClick={() => setSizeModal("large")}>Large Modal</Button>
        <Modal
          isOpen={!!sizeModal}
          onClose={() => setSizeModal(null)}
          title={`${sizeModal?.charAt(0).toUpperCase()}${sizeModal?.slice(
            1
          )} Modal`}
          size={sizeModal as "small" | "medium" | "large"}
        >
          <p>This is a {sizeModal} sized modal dialog.</p>
          <p>
            Each size has a different width to suit different content needs.
          </p>
        </Modal>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Confirmation Dialog
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => setConfirmModal(true)}>
          Open Confirm Modal
        </Button>
        <Modal
          isOpen={confirmModal}
          onClose={() => setConfirmModal(false)}
          title="Confirm Action"
          size="small"
          footer={
            <>
              <Button onClick={() => setConfirmModal(false)}>Cancel</Button>
              <Button variant="primary" onClick={handleConfirm}>
                Confirm
              </Button>
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
          <p>This action cannot be undone.</p>
        </Modal>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Form Modal
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => setFormModal(true)}>Open Form Modal</Button>
        <Modal
          isOpen={formModal}
          onClose={() => setFormModal(false)}
          title="Login Form"
          footer={
            <Button type="submit" form="demo-form" variant="primary">
              Submit
            </Button>
          }
        >
          <Form id="demo-form" onSubmit={handleFormSubmit}>
            <Input
              name="email"
              label="Email"
              type="email"
              rules={{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              }}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              rules={{
                required: true,
                minLength: 8,
                message: "Password must be at least 8 characters",
              }}
            />
          </Form>
        </Modal>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Custom Width Modal
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => setCustomModal(true)}>Custom Width Modal</Button>
        <Modal
          isOpen={customModal}
          onClose={() => setCustomModal(false)}
          title="Custom Width"
          width={800}
        >
          <p>This modal has a custom width of 800px.</p>
          <p>
            You can specify any width using numbers (pixels) or strings (CSS
            units).
          </p>
        </Modal>
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Image Preview Modal
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => setImageModal(true)}>Image Preview</Button>
        <Modal
          isOpen={imageModal}
          onClose={() => setImageModal(false)}
          size="large"
          centered
        >
          <img
            src="https://picsum.photos/800/400"
            alt="Random"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default defineComponent({
  name: "ModalWrapper",
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
      root.render(<ModalDemo />);

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
