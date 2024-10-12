import { toast } from "sonner"
import { Payment } from "./types"
import { MoreHorizontal, Eye, Edit, Trash, Clipboard } from "lucide-react"
import { Button } from "@/src/components/button/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"

export function handleViewCustomer(payment: Payment) {
    console.log("View customer:", payment)
    toast.success("Customer details viewed", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function handleViewPaymentDetails(payment: Payment) {
    console.log("View payment details:", payment)
    toast.success("Payment details viewed", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function handleEditPayment(payment: Payment) {
    console.log("Edit payment:", payment)
    toast("Payment edit initiated", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function handleDeletePayment(payment: Payment) {
    console.log("Delete payment:", payment)
    toast.error("Payment deleted", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    })
}

export function renderActionDropdown(payment: Payment) {
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
                <DropdownMenuItem onClick={() => handleViewCustomer(payment)}>
                    <Eye className="mr-2 h-4 w-4" />
                    View customer
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleViewPaymentDetails(payment)}>
                    <Clipboard className="mr-2 h-4 w-4" />
                    View payment details
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleEditPayment(payment)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit payment
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeletePayment(payment)}>
                    <Trash className="mr-2 h-4 w-4 text-red-600" />
                    Delete payment
                </DropdownMenuItem>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}