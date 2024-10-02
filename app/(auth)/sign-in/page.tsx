import { Message } from "@/src/components/form-message/FormMessage";
import AuthLogin from "@/src/page-view/auth-pages/auth-login";
import mLogo from "../../../public/img/mar-logo.png";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLogin
      searchParams={searchParams}
      logoSrc={mLogo}
      backgroundImageSrc={
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg"
      }
      isDevelopment={true}
      showSignIn={true}
      showSignUp={true}
    />
  );
}
