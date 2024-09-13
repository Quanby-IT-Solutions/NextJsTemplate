import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/src/utils/cn";

export interface DropdownMenuTriggerProps {
  className?: string;
  children: React.ReactNode;
  inset?: boolean;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  className = "",
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Trigger className={cn(className)} {...props}>
    {children}
  </DropdownMenuPrimitive.Trigger>
);
