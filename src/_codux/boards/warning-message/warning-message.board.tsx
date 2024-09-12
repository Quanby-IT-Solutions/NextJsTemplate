import React from "react";
import { createBoard } from "@wixc3/react-board";
import { WarningMessage } from "../../../../components/WarningMessage";

export default createBoard({
  name: "WarningMessage",
  Board: () => <WarningMessage />,
  isSnippet: true,
});
