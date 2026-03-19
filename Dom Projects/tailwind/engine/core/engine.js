import { parseClass } from "./parser.js";

export function applyStyles() {
  const elements = document.querySelectorAll("*");

  elements.forEach((el) => {
    const classList = el.className.split(" ");

    let styleString = "";

    classList.forEach((cls) => {
      styleString += parseClass(cls);
    });

    el.style.cssText += styleString;
  });
}