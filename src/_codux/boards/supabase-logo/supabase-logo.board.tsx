import React from "react";
import { createBoard } from "@wixc3/react-board";
import SupabaseLogo from "./supabase-logo";

export default createBoard({
  name: "SupabaseLogo",
  Board: () => <SupabaseLogo />,
  isSnippet: true,
});
