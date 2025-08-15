// components/ThemeToggle.tsx
"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { div } from "motion/react-client";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="relative z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform fixed bottom-2 right-2 lg:bottom-5 lg:right-5"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </Button>
      </div>
    </>
  );
}
