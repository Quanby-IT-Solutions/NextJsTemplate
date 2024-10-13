"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/src/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { User } from "@/src/utils/interfaces/user_management";
import { MoreHorizontal, Clipboard, Eye, Edit, Trash } from "lucide-react";
import { userSchema, UserFormData } from "@/src/schemas/userFormSchema";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import {
    Form, FormControl, FormItem, FormLabel, FormMessage
} from "@/src/components/ui/form";
import {
    Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter, DialogClose
} from "@/src/components/ui/dialog";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/src/components/ui/dropdown-menu";

// Define dialog modes
type DialogMode = "view" | "edit" | "delete" | null;

export function renderActionDropdown(user: User) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [dialogMode, setDialogMode] = React.useState<DialogMode>(null);

    const formMethods = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstName: user.first_name || "",
            lastName: user.last_name || "",
            email: user.email || "",
            phone: user.phone_number || "",
            bio: user.bio || "",
        },
    });

    const { register, handleSubmit, formState: { errors } } = formMethods;

    // Handle actions
    const handleOpenDialog = (mode: DialogMode) => {
        setDialogMode(mode);
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
        setDialogMode(null);
    };

    const onSubmit = (data: UserFormData) => {
        toast.success("User details saved", {
            description: `Saved details for ${data.firstName} ${data.lastName}`,
        });
        handleCloseDialog();
    };

    const handleDeleteUser = () => {
        toast.error("User deleted", {
            description: `Deleted ${user.first_name} ${user.last_name}`,
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
        handleCloseDialog();
    };

    const copyClipboard = () => {
        navigator.clipboard.writeText(user.id)
            .then(() => {
                toast.success("ID copied to clipboard", {
                    description: `Copied ${user.id} to clipboard`,
                });
            })
            .catch((error) => {
                console.error("Failed to copy ID to clipboard:", error);
                toast.error("Failed to copy ID to clipboard", {
                    description: "Please try again or copy manually",
                });
            });
    }

    // Render dialog content based on mode
    const renderDialogContent = () => {
        switch (dialogMode) {
            case "view":
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Viewing {user.first_name} {user.last_name}</DialogTitle>
                            <DialogDescription>
                                Here you can view the details of the selected user. This includes their name, email, phone number, and bio. You can also see their avatar if available.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogDescription className="mt-4">
                            <div className="flex items-center space-x-4 mb-4">
                                <Avatar>
                                    <AvatarImage src={user.avatar_url || ""} alt={`${user.first_name} ${user.last_name}`} />
                                    <AvatarFallback>{user.first_name?.[0]}{user.last_name?.[0]}</AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <h2 className="text-lg font-semibold">{user.first_name} {user.last_name}</h2>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <div className="text-left space-y-2">
                                <p><strong>Phone:</strong> {user.phone_number || "N/A"}</p>
                                <p><strong>Bio:</strong> {user.bio || "No bio provided"}</p>
                            </div>
                        </DialogDescription>
                    </>
                );
            case "edit":
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Edit User</DialogTitle>
                            <DialogDescription>
                                Fill out the form below to update the user's information.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogDescription className="space-y-4">
                            <Form {...formMethods}>
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...register("firstName")} placeholder="Enter first name" />
                                    </FormControl>
                                    {errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...register("lastName")} placeholder="Enter last name" />
                                    </FormControl>
                                    {errors.lastName && <FormMessage>{errors.lastName.message}</FormMessage>}
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...register("email")} placeholder="Enter email" />
                                    </FormControl>
                                    {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input {...register("phone")} placeholder="Enter phone number" />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea {...register("bio")} placeholder="Enter bio" />
                                    </FormControl>
                                </FormItem>

                                <DialogFooter className="flex justify-between mt-4">
                                    <Button type="button" variant="default" onClick={handleSubmit(onSubmit)}>
                                        Save
                                    </Button>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </Form>
                        </DialogDescription>
                    </>
                );
            case "delete":
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Delete User</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="mt-4">
                            Are you sure you want to delete {user.first_name} {user.last_name}?
                        </DialogDescription>
                        <DialogFooter className="flex justify-between mt-4">
                            <Button variant="destructive" onClick={handleDeleteUser}>
                                Confirm Delete
                            </Button>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={
                            () => copyClipboard()
                        }
                    >
                        <Clipboard className="mr-2 h-4 w-4" />
                        Copy ID
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenDialog("view")}>
                        <Eye className="mr-2 h-4 w-4" />
                        View user
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleOpenDialog("edit")}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit user
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenDialog("delete")}>
                        <Trash className="mr-2 h-4 w-4 text-red-600" />
                        Delete user
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Dialog for View, Edit, and Delete actions */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="p-6">{renderDialogContent()}</DialogContent>
            </Dialog>
        </>
    );
}
