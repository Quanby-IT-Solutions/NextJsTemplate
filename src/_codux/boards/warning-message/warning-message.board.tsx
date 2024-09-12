import React from "react";
import { createBoard } from "@wixc3/react-board";
import { WarningMessage } from "./WarningMessage";

export default createBoard({
  name: "WarningMessage",
  Board: () => <WarningMessage />,
  isSnippet: true,
});
