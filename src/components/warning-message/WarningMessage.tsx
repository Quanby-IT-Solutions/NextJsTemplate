import React from "react";
import { Badge } from "../ui/badge";

export const WarningMessage: React.FC = () => (
  <Badge variant={"outline"} className="font-normal">
    Supabase environment variables required
  </Badge>
);
