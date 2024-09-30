import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ThemeSwitcher } from "../../../components/theme-switcher/ThemeSwitcher";

export default createBoard({
  name: "ThemeSwitcher",
  Board: () => <ThemeSwitcher />,
  isSnippet: true,
});
