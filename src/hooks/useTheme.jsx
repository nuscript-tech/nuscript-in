import { useState, useEffect } from "react";

const STORAGE_KEY = "nuscript-theme";

// Singleton state shared across all useTheme() instances
const listeners = new Set();

function getInitial() {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

let currentIsDark = getInitial();

function applyTheme(value) {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  if (value) {
    root.classList.add("dark");
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, "light");
  }
}

function setDark(value) {
  currentIsDark = value;
  applyTheme(value);
  listeners.forEach((cb) => cb(value));
}

// Ensure initial DOM state matches stored preference (safety net)
if (typeof window !== "undefined") {
  applyTheme(currentIsDark);
}

export function useTheme() {
  const [isDark, setIsDark] = useState(currentIsDark);

  useEffect(() => {
    // Sync on mount in case state changed before subscription
    setIsDark(currentIsDark);
    listeners.add(setIsDark);
    return () => {
      listeners.delete(setIsDark);
    };
  }, []);

  return {
    isDark,
    toggle: () => setDark(!currentIsDark),
  };
}
