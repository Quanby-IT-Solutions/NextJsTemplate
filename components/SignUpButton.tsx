import React from "react";
import Link from "next/link";
import { Button } from "../src/_codux/boards/button/Button";

export const SignUpButton: React.FC = () => (
  <Button
    asChild
    size="sm"
    variant={"default"}
    disabled
    className="opacity-75 cursor-none pointer-events-none"
  >
    <Link href="/sign-up">Sign up</Link>
  </Button>
);
