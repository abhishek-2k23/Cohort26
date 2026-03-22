const theme = {
  colors: {
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#22c55e",
    white: "#ffffff",
    black: "#000000",
  },
  fontSize: {
    sm: "12px",
    base: "16px",
    lg: "20px",
    xl: "24px",
  },
};

export function handleColor(cls) {
  if (cls.startsWith("bg-")) {
    const color = cls.split("-")[1];
    return `background-color:${theme.colors[color]};`;
  }

  if (cls.startsWith("text-")) {
    const color = cls.split("-")[1];
    if (theme.colors[color]) {
      return `color:${theme.colors[color]};`;
    }
  }

  return "";
}

export function handleSpacing(cls) {
  const [type, val] = cls.split("-");

  if (type === "p") return `padding:${val * 4}px;`;
  if (type === "m") return `margin:${val * 4}px;`;

  return "";
}

export function handleFlex(cls) {
  const map = {
    flex: "display:flex;",
    "flex-col": "flex-direction:column;",
    "justify-center": "justify-content:center;",
    "items-center": "align-items:center;",
  };

  return map[cls] || "";
}

export function handleGrid(cls) {
  if (cls === "grid") return "display:grid;";

  if (cls.startsWith("grid-cols-")) {
    const n = cls.split("-")[2];
    return `grid-template-columns:repeat(${n},1fr);`;
  }

  return "";
}

export function handleTypography(cls) {
  if (cls.startsWith("text-")) {
    const size = cls.split("-")[1];
    if (theme.fontSize[size]) {
      return `font-size:${theme.fontSize[size]};`;
    }
  }

  if (cls === "font-bold") return "font-weight:700;";
  if (cls === "font-light") return "font-weight:300;";

  return "";
}

export function handleDecoration(cls) {
  if (cls === "underline") return "text-decoration:underline;";
  if (cls === "line-through") return "text-decoration:line-through;";
  return "";
}

export function handleSizing(cls) {
  const [type, val] = cls.split("-");

  if (type === "w") return `width:${val * 4}px;`;
  if (type === "h") return `height:${val * 4}px;`;

  return "";
}

export function handleGradient(cls) {
  if (cls.startsWith("bg-gradient-")) {
    const [, , from, to] = cls.split("-");
    return `background:linear-gradient(to right, ${from}, ${to});`;
  }
  return "";
}