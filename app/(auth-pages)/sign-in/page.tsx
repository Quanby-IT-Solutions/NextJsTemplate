import React from "react";
import { Login } from "../../../src/_codux/components/Login";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <Login searchParams={searchParams} />
    </div>
  );
}
