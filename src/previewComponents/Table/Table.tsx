import React, { useState, useMemo } from "react";
import { TableProps, SortDirection, Column } from "./types";
import "./Table.css";

const Table = <T extends Record<string, any>>({
  columns,
  dataSource,
  loading = false,
  rowKey = "id",
  pagination,
  onSort,
  onPage,
  rowSelection,
  emptyText = "No data",
  striped = false,
  bordered = false,
  size = "medium",
  className = "",
  ...props
}: TableProps<T>) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    return record[rowKey] ?? index.toString();
  };

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    const newDirection: SortDirection =
      sortKey === column.key
        ? sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
          ? null
          : "asc"
        : "asc";

    setSortKey(newDirection ? column.key : null);
    setSortDirection(newDirection);
    onSort?.(column.key, newDirection);
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return dataSource;

    const column = columns.find((col) => col.key === sortKey);
    if (!column?.sortable) return dataSource;

    return [...dataSource].sort((a, b) => {
      const result = column.sorter
        ? column.sorter(a, b)
        : String(a[sortKey]).localeCompare(String(b[sortKey]));
      return sortDirection === "asc" ? result : -result;
    });
  }, [dataSource, sortKey, sortDirection, columns]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const pageSize =
      typeof pagination === "object" ? pagination.pageSize || 10 : 10;
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, pagination, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPage?.(
      page,
      typeof pagination === "object" ? pagination.pageSize || 10 : 10
    );
  };

  const renderHeader = (column: Column<T>) => (
    <th
      key={column.key}
      className={`
        table-cell
        ${column.sortable ? "sortable" : ""}
        ${column.align ? `align-${column.align}` : ""}
        ${column.fixed ? `fixed-${column.fixed}` : ""}
      `}
      style={{ width: column.width }}
      onClick={() => handleSort(column)}
    >
      <div className="header-content">
        {column.title}
        {column.sortable && (
          <span
            className={`sort-icon ${
              sortKey === column.key ? sortDirection : ""
            }`}
          >
            ⇅
          </span>
        )}
      </div>
    </th>
  );

  const renderCell = (record: T, column: Column<T>, index: number) => (
    <td
      key={column.key}
      className={`
        table-cell
        ${column.align ? `align-${column.align}` : ""}
        ${column.fixed ? `fixed-${column.fixed}` : ""}
      `}
    >
      {column.render
        ? column.render(record[column.key], record, index)
        : record[column.key]}
    </td>
  );

  return (
    <div
      className={`
        fancy-table-wrapper
        ${loading ? "loading" : ""}
        ${striped ? "striped" : ""}
        ${bordered ? "bordered" : ""}
        ${size}
        ${className}
      `}
      {...props}
    >
      <div className="table-container">
        <table className="fancy-table">
          <thead>
            <tr>{columns.map(renderHeader)}</tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((record, index) => (
                <tr key={getRowKey(record, index)}>
                  {rowSelection && (
                    <td className="selection-cell">
                      <input
                        type="checkbox"
                        checked={rowSelection.selectedRowKeys.includes(
                          getRowKey(record, index)
                        )}
                        onChange={(e) => {
                          const key = getRowKey(record, index);
                          const newKeys = e.target.checked
                            ? [...rowSelection.selectedRowKeys, key]
                            : rowSelection.selectedRowKeys.filter(
                                (k) => k !== key
                              );
                          rowSelection.onChange(newKeys);
                        }}
                      />
                    </td>
                  )}
                  {columns.map((column) => renderCell(record, column, index))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (rowSelection ? 1 : 0)}
                  className="empty-cell"
                >
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="table-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="page-info">
            Page {currentPage} of{" "}
            {Math.ceil(
              sortedData.length /
                (typeof pagination === "object"
                  ? pagination.pageSize || 10
                  : 10)
            )}
          </span>
          <button
            disabled={
              currentPage ===
              Math.ceil(
                sortedData.length /
                  (typeof pagination === "object"
                    ? pagination.pageSize || 10
                    : 10)
              )
            }
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}

      {loading && (
        <div className="table-loading-overlay">
          <div className="loading-spinner" />
        </div>
      )}
    </div>
  );
};

export default Table;
