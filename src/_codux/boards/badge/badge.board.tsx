import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Badge } from "../../../../components/badge";

export default createBoard({
  name: "Badge",
  Board: () => <Badge variant="default">Badge Text</Badge>,
  isSnippet: true,
});
