import React from "react";
import { createBoard } from "@wixc3/react-board";
import { EnvVarWarning } from "./EnvVarWarning";

export default createBoard({
  name: "EnvVarWarning",
  Board: () => <EnvVarWarning />,
  isSnippet: true,
});
