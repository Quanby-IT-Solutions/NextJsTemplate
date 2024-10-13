import React from 'react'
import { ChevronsUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import { Skeleton } from '@/components/ui/skeleton'

export function NavUserSkeleton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <Skeleton className="h-7 w-7 rounded-md" />
          <div className="grid flex-1 gap-1">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-32" />
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
          <div className="flex items-center gap-2 px-1 py-1.5">
            <Skeleton className="h-7 w-7 rounded-md" />
            <div className="grid flex-1 gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2 space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          <Skeleton className="h-8 w-full" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}