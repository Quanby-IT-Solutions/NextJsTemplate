import React from "react";
import { signOutAction } from "@/app/actions";
import { Button } from "../src/_codux/boards/button/Button";

export interface UserGreetingProps {
  email: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ email }) => (
  <div className="flex items-center gap-4">
    Hey, {email}!
    <form action={signOutAction}>
      <Button type="submit" variant={"outline"}>
        Sign out
      </Button>
    </form>
  </div>
);
