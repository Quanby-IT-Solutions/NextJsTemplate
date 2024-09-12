import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Label } from "./label";

export default createBoard({
  name: "Label",
  Board: () => <Label dangerouslySetInnerHTML={{ __html: "Sample Label" }} />,
  isSnippet: true,
});
