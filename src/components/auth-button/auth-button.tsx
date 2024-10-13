import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const AuthButtons: React.FC = () => (
  <div className="flex gap-2">
    <Button asChild size="sm" variant={"outline"}>
      <Link href="/sign-in">Sign in</Link>
    </Button>
    <Button asChild size="sm" variant={"default"}>
      <Link href="/sign-up">Sign up</Link>
    </Button>
  </div>
);
