import React from "react";
import { createBoard } from "@wixc3/react-board";
import { SmtpMessage } from "./SmtpMessage";

export default createBoard({
  name: "SmtpMessage",
  Board: () => <SmtpMessage />,
  isSnippet: true,
});
