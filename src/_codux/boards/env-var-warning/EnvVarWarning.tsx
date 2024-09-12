import React from "react";
import { SignInButton } from "../sign-in-button/SignInButton";
import { WarningMessage } from "../warning-message/WarningMessage";
import { SignUpButton } from "../sign-up-button/SignUpButton";

export const EnvVarWarning: React.FC = () => (
  <div className="flex gap-4 items-center">
    <WarningMessage />
    <div className="flex gap-2">
      <SignInButton />
      <SignUpButton />
    </div>
  </div>
);
