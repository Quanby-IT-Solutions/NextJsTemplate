import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Checkbox } from "./checkbox";

export default createBoard({
  name: "Checkbox",
  Board: () => <Checkbox defaultChecked={true} />,
  isSnippet: true,
});
