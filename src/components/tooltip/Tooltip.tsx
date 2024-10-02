// components/tooltip/Tooltip.tsx
"use client";

import React, { ReactNode, useState } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-4 py-2 text-xs text-white bg-black rounded-md shadow-lg z-10">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
