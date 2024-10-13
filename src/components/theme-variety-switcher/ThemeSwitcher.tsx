"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";;

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 18;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {theme === "light" ? (
            <Sun size={ICON_SIZE} className="text-yellow-500" />
          ) : theme === "dark" ? (
            <Moon size={ICON_SIZE} className="text-gray-400" />
          ) : (
            <Monitor size={ICON_SIZE} className="text-muted-foreground" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 p-2 bg-background rounded-md shadow-lg border border-border"
        align="start"
      >
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors" value="light">
            <Sun size={ICON_SIZE} className="text-yellow-500" />
            <span className="text-foreground">Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors" value="dark">
            <Moon size={ICON_SIZE} className="text-gray-400" />
            <span className="text-foreground">Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors" value="system">
            <Monitor size={ICON_SIZE} className="text-muted-foreground" />
            <span className="text-foreground">System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
