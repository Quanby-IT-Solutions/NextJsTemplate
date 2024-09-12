// app/(auth-pages)/reset-password/page.tsx
import React from "react";
import { ResetPassword } from "../../../components/ResetPassword";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <ResetPassword className="my-custom-class" searchParams={searchParams} />
    </div>
  );
}
