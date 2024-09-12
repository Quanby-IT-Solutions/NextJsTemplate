import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Input } from "./input";

export default createBoard({
  name: "Input",
  Board: () => <Input />,
  isSnippet: true,
});
