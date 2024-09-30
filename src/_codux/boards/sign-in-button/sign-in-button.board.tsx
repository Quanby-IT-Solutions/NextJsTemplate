import React from "react";
import { createBoard } from "@wixc3/react-board";
import { SignInButton } from "../../../components/sign-in-button/SignInButton";

export default createBoard({
  name: "SignInButton",
  Board: () => <SignInButton />,
  isSnippet: true,
});
