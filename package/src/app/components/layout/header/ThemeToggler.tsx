"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();  

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex items-center cursor-pointer justify-center"
    >
      <span>
        <Image src={"/images/icon/sun-icon.svg"} alt="sun-icon" width={22} height={22} className="hidden dark:block" />
        <Image src={"/images/icon/moon-icon.svg"} alt="moon-icon" width={22} height={22} className="block dark:hidden" />
      </span>
    </button>
  );
};

export default ThemeToggler;
