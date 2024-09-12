import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default createBoard({
  name: "ThemeSwitcher",
  Board: () => <ThemeSwitcher />,
  isSnippet: true,
});
