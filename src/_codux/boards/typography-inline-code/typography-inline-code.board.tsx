import React from "react";
import { createBoard } from "@wixc3/react-board";
import { TypographyInlineCode } from "./inline-code";

export default createBoard({
  name: "TypographyInlineCode",
  Board: () => <TypographyInlineCode />,
  isSnippet: true,
});
