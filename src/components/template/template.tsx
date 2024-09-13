import React from "react";

export interface TemplateProps {
  className?: string;
}

export const Template: React.FC<TemplateProps> = ({ className = "" }) => (
  <div className={className}>Template</div>
);
