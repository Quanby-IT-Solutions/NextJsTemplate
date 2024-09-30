import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Label } from "../../../components/label/Label";

export default createBoard({
  name: "Label",
  Board: () => (
    <Label
      onCopy={(event) => console.log("Copy event:", event)}
      onCut={(event) => console.log("Cut event:", event)}
      onPaste={(event) => console.log("Paste event:", event)}
      onFocus={(event) => console.log("Focus event:", event)}
      onBlur={(event) => console.log("Blur event:", event)}
      onKeyDown={(event) => console.log("KeyDown event:", event)}
      onKeyUp={(event) => console.log("KeyUp event:", event)}
      dangerouslySetInnerHTML={{
        __html: "This is <strong>dangerous</strong> HTML",
      }}
    />
  ),
  isSnippet: true,
});
