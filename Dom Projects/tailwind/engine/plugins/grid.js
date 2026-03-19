export function gridPlugin(cls) {
  if (cls === "grid") {
    return "display: grid;";
  }

  if (cls.startsWith("grid-cols-")) {
    const cols = cls.split("-")[2];
    return `grid-template-columns: repeat(${cols}, 1fr);`;
  }

  return "";
}