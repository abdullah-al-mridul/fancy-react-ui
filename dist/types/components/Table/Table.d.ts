import React from "react";
import { TableProps } from "./types";
import "./Table.css";
declare const Table: <T extends Record<string, any>>({ columns, dataSource, loading, rowKey, pagination, onSort, onPage, rowSelection, emptyText, striped, bordered, size, className, ...props }: TableProps<T>) => React.JSX.Element;
export default Table;
