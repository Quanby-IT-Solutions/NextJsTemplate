import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Label } from "./Label";

export default createBoard({
  name: "Label",
  Board: () => (
    <Label
      onToggle={() => console.log("Toggled")}
      onBeforeToggle={() => console.log("Before toggle")}
      dangerouslySetInnerHTML={{
        __html: "This is <strong>dangerous</strong> HTML",
      }}
      onCopy={(e) => console.log("Copy event:", e)}
      onCut={(e) => console.log("Cut event:", e)}
      onPaste={(e) => console.log("Paste event:", e)}
      onCompositionEnd={(e) => console.log("CompositionEnd event:", e)}
      onFocus={(e) => console.log("Focus event:", e)}
      onBlur={(e) => console.log("Blur event:", e)}
      onChange={(e) => console.log("Change event:", e)}
      onBeforeInput={(e) => console.log("BeforeInput event:", e)}
      onInput={(e) => console.log("Input event:", e)}
      onReset={(e) => console.log("Reset event:", e)}
      onSubmit={(e) => console.log("Submit event:", e)}
      onInvalid={(e) => console.log("Invalid event:", e)}
      onLoad={(e) => console.log("Load event:", e)}
      onError={(e) => console.log("Error event:", e)}
      onKeyDown={(e) => console.log("KeyDown event:", e)}
      onKeyPress={(e) => console.log("KeyPress event:", e)}
      onKeyUp={(e) => console.log("KeyUp event:", e)}
      onAbort={(e) => console.log("Abort event:", e)}
      onCanPlay={(e) => console.log("CanPlay event:", e)}
      onCanPlayThrough={(e) => console.log("CanPlayThrough event:", e)}
      onDurationChange={(e) => console.log("DurationChange event:", e)}
      onEmptied={(e) => console.log("Emptied event:", e)}
    />
  ),
  isSnippet: true,
});
