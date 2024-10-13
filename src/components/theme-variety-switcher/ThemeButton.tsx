"use client";

import { useTheme } from "next-themes";
import { Lightbulb, Moon } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export function ModeMenu() {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <>
                    <Lightbulb className="h-4 w-4 text-muted-foreground" />
                    Light
                </>
            ) : (
                <>
                    <Moon className="h-4 w-4 text-muted-foreground" />
                    Dark
                </>
            )}
        </DropdownMenuItem>
    );
}
