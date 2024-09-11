import "./footer.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "Footer",
  Board: () => (
    <div className="FooterBoard_div1">
      <div className="FooterBoard_div2">
        <h1 className="FooterBoard_header1 text-uppercase">Footer Ini</h1>
        <ol className="FooterBoard_ol1">
          <li className="text-red-200">First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
      </div>
    </div>
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 769,
    windowHeight: 301,
  },
});
