"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
