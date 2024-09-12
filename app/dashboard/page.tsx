// app/(auth-pages)/reset-password/page.tsx
import React from "react";
import { Dashboard } from "../../components/Dashboard";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto">
      <Dashboard />
    </div>
  );
}
