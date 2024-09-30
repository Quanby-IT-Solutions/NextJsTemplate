import React from "react";
import { WarningMessage } from "../warning-message/WarningMessage";
import { AuthButtons } from "../auth-button/AuthButton";

export const EnvVarWarning: React.FC = () => (
  <div className="flex gap-4 items-center">
    <WarningMessage />
    <div className="flex gap-2">
      <AuthButtons />
    </div>
  </div>
);
