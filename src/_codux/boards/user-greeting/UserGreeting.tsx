import React from "react";

export interface UserGreetingProps {
  email: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ email }) => (
  <div className="flex items-center gap-4">Hey, {email}!</div>
);
