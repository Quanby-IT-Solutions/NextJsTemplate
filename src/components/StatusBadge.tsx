// components/StatusBadge.tsx
"use client";

import React from "react";

interface StatusBadgeProps {
  status: "Completed" | "Processing" | "Rejected";
  className: string;
  icon?: JSX.Element | null;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className,
  icon,
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border ${className}`}
    >
      {icon}
      <span>{status}</span>
    </div>
  );
};
