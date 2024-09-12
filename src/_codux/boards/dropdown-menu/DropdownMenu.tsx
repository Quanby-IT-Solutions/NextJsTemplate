import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuProps {
  children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => (
  <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>
);
