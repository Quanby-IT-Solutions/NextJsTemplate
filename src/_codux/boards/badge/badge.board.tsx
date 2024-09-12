import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Badge } from "./Badge";

export default createBoard({
  name: "Badge",
  Board: () => <Badge variant="default" />,
  isSnippet: true,
});
