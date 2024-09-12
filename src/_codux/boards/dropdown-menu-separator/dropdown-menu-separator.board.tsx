import React from "react";
import { createBoard } from "@wixc3/react-board";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";

export default createBoard({
  name: "DropdownMenuSeparator",
  Board: () => <DropdownMenuSeparator className="custom-separator-class" />,
  isSnippet: true,
});
