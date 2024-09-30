import { createBoard } from "@wixc3/react-board";
import { Checkbox } from "../../../components/checkbox/Checkbox";

export default createBoard({
  name: "Checkbox",
  Board: () => <Checkbox className="custom-checkbox-class" />,
  isSnippet: true,
});
