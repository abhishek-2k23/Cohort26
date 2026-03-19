import { theme } from "../config/theme.js";

export function spacingPlugin(cls) {
  const [type, value] = cls.split("-");
  if (type === "p") {
    return `padding: ${value*4}px;`;
  }

  if (type === "m") {
    return `margin: ${value*4}px;`;
  }

  return "";
}