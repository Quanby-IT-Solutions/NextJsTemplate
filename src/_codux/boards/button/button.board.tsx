import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Button } from "./button";

export default createBoard({
  name: "Button",
  Board: () => <Button variant="default" size="default" asChild={false} />,
  isSnippet: true,
});
