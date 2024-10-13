"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";;


export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background mr-2"
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                        <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
                        <span className="sr-only">Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Switch Theme</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}