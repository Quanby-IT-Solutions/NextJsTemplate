import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Checkbox } from "./Checkbox";

export default createBoard({
  name: "Checkbox",
  Board: () => <Checkbox className="custom-checkbox-class" />,
  isSnippet: true,
});
