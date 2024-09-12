import React from "react";
import { createBoard } from "@wixc3/react-board";
import ConnectSupabaseSteps from "./connect-supabase-steps";

export default createBoard({
  name: "ConnectSupabaseSteps",
  Board: () => <ConnectSupabaseSteps />,
  isSnippet: true,
});
