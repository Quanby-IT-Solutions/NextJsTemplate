import React from "react";
import { createBoard } from "@wixc3/react-board";
import { AuthButtons } from "../../../components/auth-button/AuthButton";

export default createBoard({
  name: "AuthButtons",
  Board: () => <AuthButtons />,
  isSnippet: true,
});
