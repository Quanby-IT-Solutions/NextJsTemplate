import React from "react";

export interface TestProps {
  className?: string;
}

export const Test: React.FC<TestProps> = ({ className = "" }) => (
  <div className={className}>Test</div>
);
