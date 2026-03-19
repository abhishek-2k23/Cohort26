export function flexPlugin(cls) {
  switch (cls) {
    case "flex":
      return "display: flex;";
    case "flex-col":
      return "flex-direction: column;";
    case "justify-center":
      return "justify-content: center;";
    case "items-center":
      return "align-items: center;";
    default:
      return "";
  }
}