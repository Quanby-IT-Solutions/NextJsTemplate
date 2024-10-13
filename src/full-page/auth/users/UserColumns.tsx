import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/src/components/ui/checkbox"
import { DataTableColumnHeader } from "@/src/components/data-table/data-table-header"
import { User } from "@/src/utils/interfaces/user_management"
import { renderActionDropdown } from "./UserActions"

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: boolean | "indeterminate") => {
                    table.toggleAllPageRowsSelected(!!value)
                }}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: boolean) => {
                    row.toggleSelected(!!value)
                }}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "first_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="First Name" />
        ),
    },
    {
        accessorKey: "last_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Name" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => renderActionDropdown(row.original),
    },
]
