
import { createLRUCache } from "./util.js";
import {
  handleColor,
  handleSpacing,
  handleFlex,
  handleGrid,
  handleTypography,
  handleDecoration,
  handleSizing,
  handleGradient,
} from "./plugins.js";

// LRU cache
const cache = createLRUCache(1000);

// prefix → handler mapping (O(1))
const pluginMap = {
  bg: handleColor,
  text: (cls) => handleColor(cls) + handleTypography(cls),
  p: handleSpacing,
  m: handleSpacing,
  flex: handleFlex,
  grid: handleGrid,
  justify: handleFlex,
  items: handleFlex,
  font: handleTypography,
  underline: handleDecoration,
  "line-through": handleDecoration,
  w: handleSizing,
  h: handleSizing,
};

// Parser
function parseClass(cls) {
  // check cache first
  const cached = cache.get(cls);
  if (cached) return cached;

  let style = "";

  // direct match
  if (pluginMap[cls]) {
    style = pluginMap[cls](cls);
  } else {
    const prefix = cls.split("-")[0];
    const handler = pluginMap[prefix];

    if (handler) {
      style = handler(cls);
    }
  }

  // gradient (special case)
  if (!style) {
    style = handleGradient(cls);
  }

  cache.set(cls, style);
  return style;
}

// logic to apply css 
export function applyStyles() {
  const elements = document.querySelectorAll("[class]");

  elements.forEach((el) => {
    if (el.dataset.styled) return;

    const classes = el.className.split(" ");
    let finalStyle = "";

    classes.forEach((cls) => {
      finalStyle += parseClass(cls);
    });

    el.style.cssText += finalStyle;
    el.dataset.styled = "true";
  });
}

// apply css
applyStyles();