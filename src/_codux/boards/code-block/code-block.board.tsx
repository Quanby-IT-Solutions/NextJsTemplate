import React from "react";
import { createBoard } from "@wixc3/react-board";
import { CodeBlock } from "./code-block";

export default createBoard({
  name: "CodeBlock",
  Board: () => <CodeBlock code={`const hello = 'world';`} />,
  isSnippet: true,
});
