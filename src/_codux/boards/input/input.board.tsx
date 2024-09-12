import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Input } from "./Input";

export default createBoard({
  name: "Input",
  Board: () => <Input placeholder="Enter text here" />,
  isSnippet: true,
});
