"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 bg-white/95 dark:bg-neutral-800/95 backdrop-blur shadow-sm rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all text-neutral-800 dark:text-neutral-200"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark" ? (
                <Sun size={20} strokeWidth={1.5} />
            ) : (
                <Moon size={20} strokeWidth={1.5} />
            )}
        </button>
    );
}