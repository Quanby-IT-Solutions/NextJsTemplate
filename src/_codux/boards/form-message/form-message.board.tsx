import React from "react";
import { createBoard } from "@wixc3/react-board";
import { FormMessage } from "./form-message";

export default createBoard({
  name: "FormMessage",
  Board: () => (
    <FormMessage message={{ success: "Your operation was successful!" }} />
  ),
  isSnippet: true,
});
