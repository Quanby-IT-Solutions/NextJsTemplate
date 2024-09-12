import React from "react";
import { createBoard } from "@wixc3/react-board";
import { SignUpButton } from "./SignUpButton";

export default createBoard({
  name: "SignUpButton",
  Board: () => <SignUpButton />,
  isSnippet: true,
});
