import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/app/utils/cn";

export interface DropdownMenuSeparatorProps {
  className?: string;
}

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({
  className = "",
  ...props
}) => (
  <DropdownMenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
);
