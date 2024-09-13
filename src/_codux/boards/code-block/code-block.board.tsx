import React from "react";
import { createBoard } from "@wixc3/react-board";
import { CodeBlock } from "../../../components/code-block/CodeBlock";

export default createBoard({
  name: "CodeBlock",
  Board: () => <CodeBlock code={`const hello = 'world';`} />,
  isSnippet: true,
});
