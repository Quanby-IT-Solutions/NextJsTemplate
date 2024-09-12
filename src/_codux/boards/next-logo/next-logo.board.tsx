import React from "react";
import { createBoard } from "@wixc3/react-board";
import NextLogo from "./next-logo";

export default createBoard({
  name: "NextLogo",
  Board: () => <NextLogo />,
  isSnippet: true,
});
