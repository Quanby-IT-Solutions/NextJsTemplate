import React from "react";
import { createBoard } from "@wixc3/react-board";
import { DropdownMenu } from "./DropdownMenu";

export default createBoard({
  name: "DropdownMenu",
  Board: () => <DropdownMenu>Menu Content</DropdownMenu>,
  isSnippet: true,
});
