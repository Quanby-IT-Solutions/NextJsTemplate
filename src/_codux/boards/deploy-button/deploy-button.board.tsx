import React from "react";
import { createBoard } from "@wixc3/react-board";
import DeployButton from "./DeployButton";

export default createBoard({
  name: "DeployButton",
  Board: () => <DeployButton />,
  isSnippet: true,
});
