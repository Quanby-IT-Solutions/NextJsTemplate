"use client";

import React, { useMemo } from "react";
import { Button, ButtonConfig } from "../button/Button";
import Container from "../container/Container";

interface Filter {
  type: "text" | "date" | "dropdown";
  label: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  options?: { value: string; label: string }[];
}

interface ActionControlsProps {
  filters: Filter[];
  buttons: ButtonConfig[];
}

const ActionControls: React.FC<ActionControlsProps> = ({
  filters,
  buttons,
}) => {
  // Extract repeated styles into constants for reusability
  const inputStyles =
    "px-3 py-2 border rounded-md text-neutral-600 dark:text-neutral-300 bg-gray-100 dark:bg-gray-700";

  // UseMemo to render filters only when `filters` changes
  const renderedFilters = useMemo(
    () =>
      filters.map((filter, index) => (
        <div key={index} className="flex flex-col gap-2 w-full sm:w-auto">
          <label
            htmlFor={`filter-${index}`}
            className="font-bold text-neutral-800 dark:text-neutral-200"
          >
            {filter.label}
          </label>
          {filter.type === "date" && (
            <input
              id={`filter-${index}`}
              type="date"
              value={filter.value || ""}
              onChange={(e) => filter.setValue(e.target.value || null)}
              className={inputStyles}
              placeholder="Select a date"
            />
          )}
          {filter.type === "text" && (
            <input
              id={`filter-${index}`}
              type="text"
              value={filter.value || ""}
              onChange={(e) => filter.setValue(e.target.value || null)}
              className={inputStyles}
              placeholder="Enter text"
            />
          )}
          {filter.type === "dropdown" && (
            <select
              id={`filter-${index}`}
              value={filter.value || ""}
              onChange={(e) => filter.setValue(e.target.value || null)}
              className={inputStyles}
            >
              <option value="">All</option>
              {filter.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      )),
    [filters, inputStyles]
  );

  return (
    <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-4 items-center">{renderedFilters}</div>

      <div className="flex flex-wrap gap-4 mt-4 sm:mt-0 sm:ml-auto overflow-x-auto">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            variant={button.variant}
            size={button.size}
            aria-label={button.label}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default ActionControls;
