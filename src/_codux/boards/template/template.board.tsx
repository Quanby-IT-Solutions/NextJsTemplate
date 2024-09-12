import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Template } from "./template";

export default createBoard({
  name: "Template",
  Board: () => <Template />,
  isSnippet: true,
});
