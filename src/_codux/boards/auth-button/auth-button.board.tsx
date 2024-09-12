import React from "react";
import { createBoard } from "@wixc3/react-board";
import { AuthButton } from "./AuthButton";

export default createBoard({
  name: "AuthButton",
  Board: () => <AuthButton className="custom-auth-button" />,
  isSnippet: true,
});
