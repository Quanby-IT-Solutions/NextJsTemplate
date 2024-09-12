import React from "react";
import { createBoard } from "@wixc3/react-board";
import { DropdownMenu } from "./dropdown-menu";

export default createBoard({
  name: "DropdownMenu",
  Board: () => (
    <DropdownMenu
      dir="ltr"
      open={true}
      defaultOpen={false}
      onOpenChange={(open) =>
        console.log("DropdownMenu is now", open ? "open" : "closed")
      }
      modal={false}
    />
  ),
  isSnippet: true,
});
