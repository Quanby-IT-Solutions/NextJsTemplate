import React from "react";

export interface DashboadProps {
  className?: string;
}

export const Dashboad: React.FC<DashboadProps> = ({ className = "" }) => (
  <div className={className}>Dashboad</div>
);
