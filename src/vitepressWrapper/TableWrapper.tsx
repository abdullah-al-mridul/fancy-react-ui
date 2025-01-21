import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { defineComponent, onMounted, ref, h } from "vue";
import Table from "../previewComponents/Table/Table";
import Button from "../previewComponents/Button/Button";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  status: "active" | "inactive";
  joinDate: string;
}

const mockData: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: 20 + Math.floor(Math.random() * 40),
  status: Math.random() > 0.5 ? "active" : "inactive",
  joinDate: new Date(
    Date.now() - Math.random() * 10000000000
  ).toLocaleDateString(),
}));

const TableDemo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      key: "name",
      title: "Name",
      sortable: true,
    },
    {
      key: "email",
      title: "Email",
      render: (value: string) => (
        <a href={`mailto:${value}`} style={{ color: "var(--vp-c-brand)" }}>
          {value}
        </a>
      ),
    },
    {
      key: "age",
      title: "Age",
      sortable: true,
      align: "right" as const,
      sorter: (a: User, b: User) => a.age - b.age,
    },
    {
      key: "status",
      title: "Status",
      render: (value: string) => (
        <span
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            backgroundColor:
              value === "active"
                ? "var(--vp-c-green-dimm-1)"
                : "var(--vp-c-red-dimm-1)",
            color:
              value === "active"
                ? "var(--vp-c-green-darker)"
                : "var(--vp-c-red-darker)",
          }}
        >
          {value}
        </span>
      ),
    },
    {
      key: "joinDate",
      title: "Join Date",
      sortable: true,
    },
    {
      key: "actions",
      title: "Actions",
      align: "center" as const,
      render: (_: any, record: User) => (
        <Button size="small" onClick={() => alert(`Edit user ${record.name}`)}>
          Edit
        </Button>
      ),
    },
  ];

  const handleSort = (key: string, direction: "asc" | "desc" | null) => {
    console.log("Sort:", key, direction);
  };

  const handlePage = (page: number, pageSize: number) => {
    console.log("Page:", page, "Size:", pageSize);
  };

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="demo-wrapper">
      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Basic Table with Sorting & Pagination
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={{ pageSize: 5 }}
          onSort={handleSort}
          onPage={handlePage}
        />
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Selection & Loading
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ marginBottom: "12px" }}>
          <Button onClick={simulateLoading}>Toggle Loading</Button>
          {selectedRowKeys.length > 0 && (
            <span style={{ marginLeft: "12px" }}>
              Selected {selectedRowKeys.length} items
            </span>
          )}
        </div>
        <Table
          columns={columns}
          dataSource={mockData}
          loading={loading}
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          pagination={{ pageSize: 5 }}
        />
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Striped & Bordered Variant
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Table
          columns={columns}
          dataSource={mockData.slice(0, 5)}
          striped
          bordered
          size="small"
        />
      </div>

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Empty State
      </h3>
      <div style={{ marginBottom: "24px" }}>
        <Table
          columns={columns}
          dataSource={[]}
          emptyText="No users found"
          bordered
        />
      </div>
    </div>
  );
};

export default defineComponent({
  name: "TableWrapper",
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
      root.render(<TableDemo />);

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
