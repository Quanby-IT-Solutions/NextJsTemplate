import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Circle } from "lucide-react";
import { cn } from "@/app/utils/cn";

export interface DropdownMenuRadioItemProps {
  className?: string;
  children: React.ReactNode;
  value: string;
}

export const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({
  className = "",
  children,
  value,
  ...props
}) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      className
    )}
    value={value}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
