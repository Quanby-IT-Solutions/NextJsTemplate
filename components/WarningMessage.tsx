import React from "react";
import { Badge } from "../src/_codux/boards/badge/Badge";

export const WarningMessage: React.FC = () => (
  <Badge variant={"outline"} className="font-normal">
    Supabase environment variables required
  </Badge>
);
