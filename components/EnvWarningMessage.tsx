import React from "react";
import { Badge } from "../src/_codux/boards/badge/Badge";
import { Button } from "../src/_codux/boards/button/Button";
import Link from "next/link";

export const EnvWarningMessage: React.FC = () => (
  <div className="flex gap-4 items-center">
    <div>
      <Badge variant={"default"} className="font-normal pointer-events-none">
        Please update .env.local file with anon key and url
      </Badge>
    </div>
    <div className="flex gap-2">
      <Button
        asChild
        size="sm"
        variant={"outline"}
        disabled
        className="opacity-75 cursor-none pointer-events-none"
      >
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button
        asChild
        size="sm"
        variant={"default"}
        disabled
        className="opacity-75 cursor-none pointer-events-none"
      >
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  </div>
);
