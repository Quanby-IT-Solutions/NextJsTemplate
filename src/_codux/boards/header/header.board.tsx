import { createBoard } from "@wixc3/react-board";
import { Header } from "../../../components/header/header";

export default createBoard({
  name: "Header",
  Board: () => (
    <Header
      className="custom-header-class"
      websiteName={"Website"}
      links={[
        { label: "Home", href: "/", enabled: true },
        { label: "About Us", href: "/about", enabled: true },
        { label: "Contact", href: "/contact", enabled: true },
      ]}
      isAuthenticated={false}
    />
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1174,
  },
});
