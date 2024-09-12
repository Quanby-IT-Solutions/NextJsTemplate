import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Button } from "./Button";

export default createBoard({
  name: "Button",
  Board: () => (
    <Button variant="default" size="default" asChild={false}>
      Click me
    </Button>
  ),
  isSnippet: true,
});
