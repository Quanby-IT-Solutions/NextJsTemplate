import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export interface DropdownMenuContentProps {
  className?: string;
  sideOffset?: number;
  children: React.ReactNode;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  className = "",
  sideOffset = 4,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className
      )}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
);
