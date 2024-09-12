import React from "react";
import { WarningMessage } from "./WarningMessage";
import { SignUpButton } from "./SignUpButton";
import { SignInButton } from "./SignInButton";

export const EnvVarWarning: React.FC = () => (
  <div className="flex gap-4 items-center">
    <WarningMessage />
    <div className="flex gap-2">
      <SignInButton />
      <SignUpButton />
    </div>
  </div>
);
