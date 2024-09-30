import { createBoard } from "@wixc3/react-board";
import { FormMessage } from "../../../components/form-message/FormMessage";

export default createBoard({
  name: "FormMessage",
  Board: () => (
    <FormMessage message={{ success: "Your operation was successful!" }} />
  ),
  isSnippet: true,
});
