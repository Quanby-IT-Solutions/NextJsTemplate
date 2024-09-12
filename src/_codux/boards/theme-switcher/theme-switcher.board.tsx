import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ThemeSwitcher } from "./theme-switcher";

export default createBoard({
  name: "ThemeSwitcher",
  Board: () => <ThemeSwitcher />,
  isSnippet: true,
});
