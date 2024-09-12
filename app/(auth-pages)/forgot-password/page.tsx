import React from "react";
import { ForgotPassword } from "../../../src/_codux/components/ForgotPassword";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <ForgotPassword searchParams={searchParams} />
    </div>
  );
}
