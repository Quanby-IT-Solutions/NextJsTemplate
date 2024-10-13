// app/components/data-table/data-table-toolbar.tsx
import React from 'react'
import { Table } from "@tanstack/react-table"
import { Button } from "../ui/button";
import { DataTableViewOptions } from "@/src/components/data-table/data-table-view-options"
import { X } from "lucide-react"
import { DataTableFilter } from "./data-table-filter"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { FilterableColumn } from './data-table'

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    filterableColumns: FilterableColumn[]
}

export function DataTableToolbar<TData>({
    table,
    filterableColumns,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
                {filterableColumns.map((column) => {
                    if (column.type === "faceted") {
                        return (
                            <DataTableFacetedFilter
                                key={column.id}
                                column={table.getColumn(column.id)}
                                title={column.id}
                                options={column.options || []}
                            />
                        )
                    }
                    return (
                        <DataTableFilter
                            key={column.id}
                            column={column}
                            table={table}
                        />
                    )
                })}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}