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
      isDevelopment={true}
      showSignIn={true}
      showSignUp={true}
      initialForm={"signIn"}
      signInBackgroundImageSrc={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QBh1DoFAHgDhUuL6pGJy9PFvZVv_6_xV-A&s"
      }
      signUpBackgroundImageSrc={
        "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148881320.jpg"
      }
    />
  );
}
