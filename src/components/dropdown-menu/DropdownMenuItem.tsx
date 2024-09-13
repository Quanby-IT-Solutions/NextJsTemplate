import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/src/utils/cn";

export interface DropdownMenuItemProps {
  className?: string;
  inset?: boolean;
  children: React.ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  className = "",
  inset,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
);
