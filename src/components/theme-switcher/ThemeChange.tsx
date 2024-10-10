"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "../button/Button";

const ThemeChangerButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const ICON_SIZE = 24;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center transition-all"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun size={ICON_SIZE} className="text-yellow-100 transition-colors duration-300" />
            ) : (
                <Moon size={ICON_SIZE} className="text-gray-400 transition-colors duration-300" />
            )}
        </Button>
    );
};

export { ThemeChangerButton };
