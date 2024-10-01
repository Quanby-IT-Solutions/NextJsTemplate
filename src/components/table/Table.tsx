"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Input } from "@/src/components/input/Input";
import { Button } from "@/src/components/button/Button";
import Tooltip from "@/src/components/tooltip/Tooltip";
import Container from "../container/Container";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export interface ColumnDefinition<T> {
  header: string;
  accessor: keyof T;
  render?: (data: T[keyof T]) => ReactNode;
}

interface TableProps<T> {
  columns: ColumnDefinition<T>[];
  data: T[];
  selectable?: boolean;
  editable?: boolean;
  onEditRow?: (row: T, index: number) => void;
  onDeleteRow?: (index: number) => void;
  selectedRows: Set<number>;
  setSelectedRows: React.Dispatch<React.SetStateAction<Set<number>>>;
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
}

export const Table = <T,>({
  columns,
  data,
  selectable = false,
  editable = false,
  onEditRow,
  onDeleteRow,
  selectedRows,
  setSelectedRows,
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
  onFirstPage,
  onLastPage,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}: TableProps<T>) => {
  const [tableHeight, setTableHeight] = useState<number>(300);

  const handleSelectRow = (index: number) => {
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
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((_, index) => index)));
    }
  };

  useEffect(() => {
    const newHeight = Math.max(300, selectedRows.size * 50);
    setTableHeight(newHeight);
  }, [selectedRows]);

  return (
    <Container className="overflow-x-auto mt-6">
      {data.length === 0 ? (
        <div className="p-6 text-center text-neutral-600 dark:text-neutral-300">
          No records available.
        </div>
      ) : (
        <>
          <div
            className={`min-h-[500px] max-h-[${tableHeight}px] overflow-auto`}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {selectable && (
                    <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">
                      <Input
                        type="checkbox"
                        checked={selectedRows.size === data.length}
                        onChange={handleSelectAll}
                        className="cursor-pointer"
                      />
                      {/* no value */}
                    </th>
                  )}
                  {columns.map((column) => (
                    <th
                      key={column.header}
                      className="p-4 border-b border-neutral-300 dark:border-neutral-700 font-semibold text-sm text-neutral-800 dark:text-neutral-200"
                    >
                      {column.header}
                    </th>
                  ))}
                  {editable && (
                    <th className="p-4 border-b border-neutral-300 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-200">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition-colors duration-200 ${
                      rowIndex % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    } hover:bg-gray-200 dark:hover:bg-gray-700`}
                  >
                    {selectable && (
                      <td className="p-4 border-b border-neutral-200 dark:border-neutral-700">
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
                          className="p-4 border-b border-neutral-200 dark:border-neutral-700 max-w-[200px] truncate"
                        >
                          {isLongText ? (
                            <Tooltip content={cellValue as string}>
                              <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <td className="p-4 border-b border-neutral-200 dark:border-neutral-700 space-x-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => onEditRow && onEditRow(row, rowIndex)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onDeleteRow && onDeleteRow(rowIndex)}
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

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-4">
            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              <Button
                onClick={onFirstPage}
                variant="ghost"
                size="icon"
                disabled={currentPage === 1}
              >
                <ChevronsLeft />
              </Button>
              <Button
                onClick={onPreviousPage}
                variant="ghost"
                size="icon"
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </Button>
              <Input
                type="number"
                value={currentPage}
                onChange={(e) => {
                  const newPage = Number(e.target.value);
                  if (newPage >= 1 && newPage <= totalPages) {
                    onPageChange(newPage);
                  }
                }}
                className="w-16 p-2 text-center border rounded-md text-neutral-800 dark:text-neutral-200"
                min={1}
                max={totalPages}
                aria-label="Current page"
              />
              <Button
                onClick={onNextPage}
                variant="ghost"
                size="icon"
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </Button>
              <Button
                onClick={onLastPage}
                variant="ghost"
                size="icon"
                disabled={currentPage === totalPages}
              >
                <ChevronsRight />
              </Button>
            </div>

            {/* Items Per Page Dropdown */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="itemsPerPage"
                className="text-neutral-800 dark:text-neutral-200"
              >
                Rows per page:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                className="p-2 border rounded-md text-neutral-800 dark:text-neutral-200"
              >
                {[5, 10, 15, 20].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
