import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/src/utils/cn";

export interface DropdownMenuLabelProps {
  className?: string;
  inset?: boolean;
  children: React.ReactNode;
}

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({
  className = "",
  inset,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Label>
);
