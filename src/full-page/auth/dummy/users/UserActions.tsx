import { toast } from "sonner"
import { User } from "@/src/utils/interfaces/user_management"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react"
import { Button } from "@/src/components/button/Button"

export function handleViewUser(user: User) {
    console.log("View user:", user)
    toast.success("User details viewed", {
        description: `Viewed ${user.firstName} ${user.lastName}'s details`,
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function handleEditUser(user: User) {
    console.log("Edit user:", user)
    toast("User edit initiated", {
        description: `Editing ${user.firstName} ${user.lastName}'s details`,
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function handleDeleteUser(user: User) {
    console.log("Delete user:", user)
    toast.error("User deleted", {
        description: `Deleted ${user.firstName} ${user.lastName}`,
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function renderActionDropdown(user: User) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleViewUser(user)}>
                    <Eye className="mr-2 h-4 w-4" />
                    View user
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleEditUser(user)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit user
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteUser(user)}>
                    <Trash className="mr-2 h-4 w-4 text-red-600" />
                    Delete user
                </DropdownMenuItem>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
