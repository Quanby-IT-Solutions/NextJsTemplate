import { Message } from "@/src/components/form-message/form-message";
import AuthLogin from "@/src/full-page/auth/auth-login";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLogin
      searchParams={searchParams}
      logoSrc={'/img/mar-logo.png'}
      isDevelopment={true}
      showSignIn={true}
      showSignUp={true}
      initialForm={"signUp"}
      signInBackgroundImageSrc={
        "https://i.redd.it/9amxhi1vhh4c1.gif"
      }
      signUpBackgroundImageSrc={
        "https://storage.ko-fi.com/cdn/useruploads/fec447dc-50ed-443a-9e66-e6a855557d63_lethalcompanyship.gif"
      }
    />
  );
}
