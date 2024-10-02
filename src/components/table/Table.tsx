import React, { ReactNode, useState, useMemo, useEffect } from "react";
import { Input } from "@/src/components/input/Input";
import { Button, ButtonConfig } from "@/src/components/button/Button";
import Tooltip from "@/src/components/tooltip/Tooltip";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/src/utils/cn";
import ActionControls from "./ActionControls";
import Container from "../container/Container";

export interface ColumnDefinition<T> {
  header: string;
  accessor: keyof T;
  render?: (data: T[keyof T]) => ReactNode;
  sortable?: boolean;
}

export interface Filter {
  type: "text" | "date" | "dropdown";
  label: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  options?: { value: string; label: string }[];
}

interface TableProps<T> {
  columns: ColumnDefinition<T>[];
  data: T[];
  filters?: Filter[];
  buttons?: ButtonConfig[];
  selectable?: boolean;
  editable?: boolean;
  onEditRow?: (row: T, index: number) => void;
  onDeleteRow?: (index: number) => void;
  selectedRows?: Set<number>;
  setSelectedRows?: React.Dispatch<React.SetStateAction<Set<number>>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage?: number;
  onItemsPerPageChange?: (items: number) => void;
  className?: string;
  darkMode?: boolean;
}

type SortConfig = {
  key: string | null;
  direction: "asc" | "desc" | null;
};

const MIN_ROWS = 5; // Minimum number of rows to display

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  filters = [],
  buttons = [],
  selectable = false,
  editable = false,
  onEditRow,
  onDeleteRow,
  selectedRows = new Set(),
  setSelectedRows,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
  onItemsPerPageChange,
  className,
  darkMode = false,
}: TableProps<T>) => {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.error(
        "Table: 'data' prop is not an array. Returning empty array."
      );
      return [];
    }

    return data.filter((row) => {
      const matchesSearch = columns.some((column) => {
        const cellValue = String(row[column.accessor] || "").toLowerCase();
        return cellValue.includes(localSearchQuery.toLowerCase());
      });

      const matchesFilters = filters.every((filter) => {
        if (!filter.value) return true;

        const cellValue = row[filter.label.toLowerCase() as keyof T];
        if (cellValue === undefined) {
          console.warn(
            `Table: Filter '${filter.label}' does not match any column in the data.`
          );
          return true;
        }

        if (Array.isArray(cellValue)) {
          return cellValue.some((value: unknown) => {
            if (value === null || value === undefined) return false;
            return String(value).toLowerCase() === filter.value?.toLowerCase();
          });
        } else {
          if (cellValue === null || cellValue === undefined) return false;
          return String(cellValue)
            .toLowerCase()
            .includes(filter.value?.toLowerCase() ?? "");
        }
      });

      return matchesSearch && matchesFilters;
    });
  }, [data, localSearchQuery, columns, filters]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const totalFilteredItems = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalFilteredItems / itemsPerPage));

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      setCurrentPage?.(Math.min(Math.max(1, currentPage), totalPages));
    }
  }, [currentPage, totalPages, setCurrentPage]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectRow = (index: number) => {
    if (!setSelectedRows) return;
    setSelectedRows((prev) => {
      const updatedSelection = new Set(prev);
      if (updatedSelection.has(index)) {
        updatedSelection.delete(index);
      } else {
        updatedSelection.add(index);
      }
      return updatedSelection;
    });
  };

  const handleSelectAll = () => {
    if (!setSelectedRows) return;
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((_, index) => index)));
    }
  };

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.key === key) {
        return {
          key,
          direction: prevConfig.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const handleResetFilters = () => {
    setLocalSearchQuery("");
    filters.forEach((filter) => filter.setValue(null));
    setSortConfig({ key: null, direction: null });
  };

  const resetFiltersButton: ButtonConfig = {
    label: "Reset",
    onClick: handleResetFilters,
    variant: "ghost",
    size: "sm",
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalFilteredItems);

  const tableRowHeight = 48;
  const minTableHeight = MIN_ROWS * tableRowHeight;
  const actualTableHeight = Math.max(
    minTableHeight,
    paginatedData.length * tableRowHeight
  );

  return (
    <>
      <ActionControls
        filters={filters}
        buttons={[...buttons, resetFiltersButton]}
      />
      <Container className="overflow-x-auto mt-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="itemsPerPage" className="text-sm">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
              className={cn(
                "border rounded text-sm p-1",
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              )}
            >
              {[5, 10, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <Input
            type="text"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            placeholder="Search"
            className={cn(
              "border rounded text-sm p-1 w-64",
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            )}
          />
        </div>
        <div
          className={cn(
            "border rounded overflow-hidden",
            darkMode ? "border-gray-600" : "border-gray-200",
            `min-h-[${minTableHeight}px] h-[${actualTableHeight}px]`
          )}
        >
          <table className="w-full border-collapse">
            <thead
              className={cn(
                "text-left",
                darkMode ? "bg-gray-700" : "bg-gray-50"
              )}
            >
              <tr>
                {selectable && (
                  <th className="p-3">
                    <Input
                      type="checkbox"
                      checked={selectedRows.size === paginatedData.length}
                      onChange={handleSelectAll}
                      className="cursor-pointer"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.header}
                    className={cn(
                      "p-3 font-medium cursor-pointer",
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
                    )}
                    onClick={() =>
                      column.sortable && handleSort(column.accessor as string)
                    }
                  >
                    <div className="flex items-center">
                      {column.header}
                      {column.sortable &&
                        sortConfig.key === column.accessor && (
                          <span className="ml-1">
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp size={14} />
                            ) : (
                              <ChevronDown size={14} />
                            )}
                          </span>
                        )}
                    </div>
                  </th>
                ))}
                {editable && <th className="p-3">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    "border-t",
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-200 hover:bg-gray-50"
                  )}
                >
                  {selectable && (
                    <td className="p-3">
                      <Input
                        type="checkbox"
                        checked={selectedRows.has(rowIndex)}
                        onChange={() => handleSelectRow(rowIndex)}
                        className="cursor-pointer"
                      />
                    </td>
                  )}
                  {columns.map((column) => {
                    const cellValue = row[column.accessor];
                    const isLongText =
                      typeof cellValue === "string" && cellValue.length > 30;

                    return (
                      <td
                        key={`${rowIndex}-${String(column.accessor)}`}
                        className="p-3"
                      >
                        {isLongText ? (
                          <Tooltip content={cellValue as string}>
                            <span className="block truncate">
                              {column.render
                                ? column.render(cellValue)
                                : (cellValue as ReactNode)}
                            </span>
                          </Tooltip>
                        ) : (
                          <span className="block">
                            {column.render
                              ? column.render(cellValue)
                              : (cellValue as ReactNode)}
                          </span>
                        )}
                      </td>
                    );
                  })}
                  {editable && (
                    <td className="p-3 space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEditRow?.(row, rowIndex)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteRow?.(rowIndex)}
                      >
                        Delete
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setCurrentPage?.(1)}
              variant="ghost"
              size="sm"
              disabled={currentPage === 1}
            >
              <ChevronsLeft size={14} />
            </Button>
            <Button
              onClick={() => setCurrentPage?.((prev) => Math.max(1, prev - 1))}
              variant="ghost"
              size="sm"
              disabled={currentPage === 1}
            >
              <ChevronLeft size={14} />
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage?.((prev) => Math.min(totalPages, prev + 1))
              }
              variant="ghost"
              size="sm"
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={14} />
            </Button>
            <Button
              onClick={() => setCurrentPage?.(totalPages)}
              variant="ghost"
              size="sm"
              disabled={currentPage === totalPages}
            >
              <ChevronsRight size={14} />
            </Button>
          </div>
          <div>
            {totalFilteredItems > 0 ? (
              <>
                Showing {startIndex} to {endIndex} of {totalFilteredItems}
                {totalFilteredItems !== data.length &&
                  ` (filtered from ${data.length} total entries)`}
              </>
            ) : (
              `Showing 0 entries${data.length > 0 ? ` (filtered from ${data.length} total entries)` : ""}`
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
