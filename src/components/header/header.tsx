import React from "react";

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => (
  <div className={className}>Header</div>
);
