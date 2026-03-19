import { theme } from "../config/theme.js";

export function colorPlugin(cls) {
  // bg-red
  if (cls.startsWith("bg-")) {
    const color = cls.split("-")[1];
    return `background-color: ${theme.colors[color]};`;
  }

  // text-red
  if (cls.startsWith("text-")) {
    const color = cls.split("-")[1];
    return `color: ${theme.colors[color]};`;
  }

  return "";
}