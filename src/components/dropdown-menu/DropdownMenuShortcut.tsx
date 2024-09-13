import React from "react";
import { cn } from "@/src/utils/cn";

export interface DropdownMenuShortcutProps {
  className?: string;
  children: React.ReactNode;
}

export const DropdownMenuShortcut: React.FC<DropdownMenuShortcutProps> = ({
  className = "",
  children,
  ...props
}) => (
  <span
    className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
    {...props}
  >
    {children}
  </span>
);
