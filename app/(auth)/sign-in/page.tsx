// import { Login } from "@/src/components/Login";
import { Message } from "@/src/components/form-message/FormMessage";
import LoginPage from "@/src/components/auth-login-registration/LoginPage";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="">
      <LoginPage
        searchParams={searchParams}
        logoSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKO70hopq8eNzDydh88GhyKEn8cHMtxh-pA&s"
        }
        backgroundImageSrc={
          "https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small_2x/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg"
        }
        isDevelopment={false}
        photoCredit={{
          photographer: "",
          photographerLink: "",
        }}
      />
    </div>
  );
}
