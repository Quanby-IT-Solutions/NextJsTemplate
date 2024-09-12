import React from "react";
import { createBoard } from "@wixc3/react-board";
import { TutorialStep } from "./tutorial-step";

export default createBoard({
  name: "TutorialStep",
  Board: () => (
    <TutorialStep title="Step 1: Introduction">
      Learn the basics of React with this introductory step.
    </TutorialStep>
  ),
  isSnippet: true,
});
