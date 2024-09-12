// app/(auth-pages)/sign-up/page.tsx
import React from "react";
import { Signup } from "../../../components/Signup";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <Signup searchParams={searchParams} />
    </div>
  );
}
