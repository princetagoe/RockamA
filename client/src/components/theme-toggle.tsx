import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-provider";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 p-0"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
        transition={{ duration: 0.2 }}
        key={theme}
        className="w-full h-full flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-300" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;