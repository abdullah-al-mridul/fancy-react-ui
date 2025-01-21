import { HTMLAttributes, ReactNode } from "react";
export type SortDirection = "asc" | "desc" | null;
export interface Column<T = any> {
    /**
     * Unique key for the column
     */
    key: string;
    /**
     * Column header title
     */
    title: ReactNode;
    /**
     * Column data renderer
     */
    render?: (value: any, record: T, index: number) => ReactNode;
    /**
     * Enable sorting for this column
     */
    sortable?: boolean;
    /**
     * Custom sort function
     */
    sorter?: (a: T, b: T) => number;
    /**
     * Column width
     */
    width?: number | string;
    /**
     * Text alignment
     */
    align?: "left" | "center" | "right";
    /**
     * Fixed position
     */
    fixed?: "left" | "right";
}
export interface TableProps<T = any> extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /**
     * Table columns configuration
     */
    columns: Column<T>[];
    /**
     * Data source
     */
    dataSource: T[];
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * Row key
     */
    rowKey?: string | ((record: T) => string);
    /**
     * Enable pagination
     */
    pagination?: boolean | {
        pageSize?: number;
        current?: number;
        total?: number;
    };
    /**
     * Sort change handler
     */
    onSort?: (key: string, direction: SortDirection) => void;
    /**
     * Page change handler
     */
    onPage?: (page: number, pageSize: number) => void;
    /**
     * Row selection configuration
     */
    rowSelection?: {
        selectedRowKeys: string[];
        onChange: (selectedRowKeys: string[]) => void;
    };
    /**
     * Empty state content
     */
    emptyText?: ReactNode;
    /**
     * Zebra striped rows
     */
    striped?: boolean;
    /**
     * Bordered table
     */
    bordered?: boolean;
    /**
     * Table size
     */
    size?: "small" | "medium" | "large";
}
