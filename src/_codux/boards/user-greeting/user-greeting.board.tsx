import React from "react";
import { createBoard } from "@wixc3/react-board";
import { UserGreeting } from "../../../components/user-greeting/UserGreeting";

export default createBoard({
  name: "UserGreeting",
  Board: () => <UserGreeting email="user@example.com" />,
  isSnippet: true,
});
