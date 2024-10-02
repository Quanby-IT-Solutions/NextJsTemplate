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
  const inputStyles =
    "p-1 border rounded text-neutral-600 dark:text-neutral-300 bg-gray-50 dark:bg-gray-800 text-sm";
  const renderedFilters = useMemo(
    () =>
      filters.map((filter, index) => (
        <div key={index} className="flex flex-col gap-1 w-full sm:w-auto">
          <label
            htmlFor={`filter-${index}`}
            className="text-neutral-700 dark:text-neutral-300 text-xs"
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
            />
          )}
          {filter.type === "text" && (
            <input
              id={`filter-${index}`}
              type="text"
              value={filter.value || ""}
              onChange={(e) => filter.setValue(e.target.value || null)}
              className={inputStyles}
              placeholder="Text"
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
    <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2 items-center">{renderedFilters}</div>

      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:ml-auto">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            variant="ghost"
            size="sm"
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
