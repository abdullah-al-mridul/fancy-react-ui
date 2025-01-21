---
outline: deep
---

# Table

The Table component provides a powerful way to display and interact with structured data, featuring sorting, pagination, and row selection.

## Basic Usage

```jsx
import { Table } from "fancy-react-ui";

const columns = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "age",
    title: "Age",
    align: "right",
  },
];

const data = [
  { id: "1", name: "John Doe", age: 30 },
  { id: "2", name: "Jane Smith", age: 25 },
];

function App() {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
}
```

Live Demo:

<TableWrapper />

## Props

| Prop Name      | Type                                              | Default     | Description                   |
| -------------- | ------------------------------------------------- | ----------- | ----------------------------- |
| `columns`      | `Column[]`                                        | Required    | Table columns configuration   |
| `dataSource`   | `T[]`                                             | Required    | Data records to display       |
| `loading`      | `boolean`                                         | `false`     | Loading state                 |
| `rowKey`       | `string \| ((record: T) => string)`               | `"id"`      | Unique identifier for rows    |
| `pagination`   | `boolean \| PaginationConfig`                     | -           | Pagination configuration      |
| `striped`      | `boolean`                                         | `false`     | Enable zebra-striped rows     |
| `bordered`     | `boolean`                                         | `false`     | Add borders to table          |
| `size`         | `"small" \| "medium" \| "large"`                  | `"medium"`  | Table size variant            |
| `emptyText`    | `ReactNode`                                       | `"No data"` | Text shown when data is empty |
| `onSort`       | `(key: string, direction: SortDirection) => void` | -           | Sort change callback          |
| `onPage`       | `(page: number, pageSize: number) => void`        | -           | Page change callback          |
| `rowSelection` | `RowSelection`                                    | -           | Row selection configuration   |

## Column Properties

```typescript
interface Column<T> {
  key: string; // Unique identifier for the column
  title: ReactNode; // Column header content
  render?: (value: any, record: T, index: number) => ReactNode; // Custom cell renderer
  sortable?: boolean; // Enable sorting for this column
  sorter?: (a: T, b: T) => number; // Custom sort function
  width?: number | string; // Column width
  align?: "left" | "center" | "right"; // Text alignment
  fixed?: "left" | "right"; // Fixed column position
}
```

## Examples

### Sortable Columns

```jsx
const columns = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },
  {
    key: "age",
    title: "Age",
    sortable: true,
    sorter: (a, b) => a.age - b.age,
  },
];

<Table
  columns={columns}
  dataSource={data}
  onSort={(key, direction) => {
    console.log(`Sorting ${key} ${direction}`);
  }}
/>;
```

### Custom Cell Rendering

```jsx
const columns = [
  {
    key: "status",
    title: "Status",
    render: (value) => (
      <span className={`status-badge ${value}`}>{value.toUpperCase()}</span>
    ),
  },
  {
    key: "actions",
    title: "Actions",
    render: (_, record) => (
      <Button onClick={() => handleEdit(record)}>Edit</Button>
    ),
  },
];
```

### Row Selection

```jsx
function App() {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={{
        selectedRowKeys: selectedRows,
        onChange: setSelectedRows,
      }}
    />
  );
}
```

### Pagination Configuration

```jsx
<Table
  columns={columns}
  dataSource={data}
  pagination={{
    pageSize: 10,
    current: 1,
    total: 100,
  }}
  onPage={(page, pageSize) => {
    fetchData({ page, pageSize });
  }}
/>
```

## Styling

The Table component can be customized using CSS variables:

```css
.fancy-table {
  --table-bg: #ffffff;
  --table-header-bg: #f9fafb;
  --table-header-color: #111827;
  --table-border-color: rgba(0, 0, 0, 0.1);
  --table-hover-bg: rgba(0, 0, 0, 0.02);
  --table-stripe-bg: rgba(0, 0, 0, 0.02);
  --table-empty-color: #6b7280;
  --table-text-color: #374151;
  --table-spinner-color: #3b82f6;
}
```

## Best Practices

1. **Performance**

   - Use appropriate page sizes
   - Implement server-side sorting for large datasets
   - Optimize render functions
   - Consider virtual scrolling for large tables

2. **Accessibility**

   - Provide meaningful column headers
   - Use semantic markup
   - Ensure keyboard navigation
   - Maintain proper contrast ratios

3. **User Experience**

   - Show loading states during data fetches
   - Provide clear empty states
   - Maintain consistent column widths
   - Use appropriate text alignment

4. **Responsive Design**
   - Consider horizontal scrolling
   - Use appropriate cell padding
   - Adapt to different screen sizes
   - Handle long content gracefully

## Common Use Cases

- Data grids
- Admin panels
- List views
- Data analysis
- User management
- Inventory systems
- Transaction history
- Report generation

## Troubleshooting

Common issues and solutions:

- **Sorting not working**: Verify column `sortable` prop and `sorter` function
- **Selection issues**: Check `rowKey` configuration
- **Pagination problems**: Validate page size and total count
- **Layout breaks**: Review column width settings
- **Performance issues**: Optimize render functions and data size

## Examples

### Complex Table with Multiple Features

```jsx
function ComplexTable() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      key: "name",
      title: "Name",
      sortable: true,
      fixed: "left",
    },
    {
      key: "status",
      title: "Status",
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: "progress",
      title: "Progress",
      render: (value) => <ProgressBar value={value} />,
    },
    {
      key: "actions",
      title: "Actions",
      fixed: "right",
      render: (_, record) => (
        <div className="action-buttons">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowSelection={{
        selectedRowKeys: selectedKeys,
        onChange: setSelectedKeys,
      }}
      pagination={{ pageSize: 10 }}
      striped
      bordered
      size="small"
    />
  );
}
```
