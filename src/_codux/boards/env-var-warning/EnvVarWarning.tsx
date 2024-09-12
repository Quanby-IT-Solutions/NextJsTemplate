import React from "react";
import { SignUpButton } from "../../components/SignUpButton";
import { SignInButton } from "../../components/SignInButton";
import { WarningMessage } from "../warning-message/WarningMessage";

export const EnvVarWarning: React.FC = () => (
  <div className="flex gap-4 items-center">
    <WarningMessage />
    <div className="flex gap-2">
      <SignInButton />
      <SignUpButton />
    </div>
  </div>
);
