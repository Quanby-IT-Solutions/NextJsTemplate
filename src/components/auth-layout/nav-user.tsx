import React from 'react'
import Link from 'next/link'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { signOutAction } from "../../utils/actions"
import { ModeMenu } from "../theme-variety-switcher/ThemeButton"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
        <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm transition-all">
          <Avatar className="h-7 w-7 rounded-md border">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="animate-in fade-in-50 zoom-in-90"
            />
            <AvatarFallback className="rounded-md">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 leading-none">
            <div className="font-medium">{user.name}</div>
            <div className="overflow-hidden text-xs text-muted-foreground">
              <div className="line-clamp-1">{user.email}</div>
            </div>
          </div>
          <ChevronsUpDown className="ml-auto mr-0.5 h-4 w-4 text-muted-foreground/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="h-7 w-7 rounded-md">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1">
              <div className="font-medium">{user.name}</div>
              <div className="overflow-hidden text-xs text-muted-foreground">
                <div className="line-clamp-1">{user.email}</div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile" passHref legacyBehavior>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <BadgeCheck className="h-4 w-4 text-muted-foreground" />
              Account
            </DropdownMenuItem>
          </Link>
          <Link href="/profile" passHref legacyBehavior>
            <DropdownMenuItem className="gap-2  cursor-pointer">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              Billing
            </DropdownMenuItem>
          </Link>
          <Link href="/profile" passHref legacyBehavior>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <Bell className="h-4 w-4 text-muted-foreground" />
              Notifications
            </DropdownMenuItem>
          </Link>
          <ModeMenu />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="h-4 w-4 text-muted-foreground" />
          <form action={signOutAction}>
            <button type="submit">
              Sign out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}