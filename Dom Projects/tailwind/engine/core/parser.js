import { colorPlugin } from "../plugins/colors.js";
import { spacingPlugin } from "../plugins/spacing.js";
import { flexPlugin } from "../plugins/flex.js";
import { gridPlugin } from "../plugins/grid.js";

const plugins = [
  colorPlugin,
  spacingPlugin,
  flexPlugin,
  gridPlugin,
];

export function parseClass(cls) {
  let styles = "";

  for (let plugin of plugins) {
    const result = plugin(cls);
    if (result) styles += result;
  }

  return styles;
}