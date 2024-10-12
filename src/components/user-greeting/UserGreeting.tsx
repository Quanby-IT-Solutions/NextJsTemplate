import React from "react";

export interface UserGreetingProps {
  user: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ user }) => (
  <div className="flex items-center gap-4">Welcome, {user}!</div>
);
