const formatSelect = document.getElementById("format");
const toneSelect = document.getElementById("tone");
const btn = document.getElementById("generate");
const palette = document.getElementById("palette");
function getRandomRGB(tone) {
  let min = 0
  let max = 255
  if (tone === "light") {
    min = 150
    max = 255
  }
  if (tone === "dark") {
    min = 0
    max = 125
  }
  const r = Math.floor(Math.random() * (max - min) + min)
  const g = Math.floor(Math.random() * (max - min) + min)
  const b = Math.floor(Math.random() * (max - min) + min)
  return { r, g, b }
}

function rgbToHex(r, g, b) {
    return "#" + [r,g,b].map((val) => val.toString(16).padStart(2,"0")).join("")
}
function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const { r, g, b } = getRandomRGB(toneSelect.value);
        let colorValue;

        if (formatSelect.value === "hex") {
            colorValue = rgbToHex(r, g, b);
        } else {
            colorValue = `rgb(${r}, ${g}, ${b})`;
        }

        const div = document.createElement("div");
        div.classList.add("color");
        div.style.background = colorValue;

        // Display the generated color value at bottom of the card
        const label = document.createElement("p");
        label.textContent = colorValue;
        label.classList.add("color-label");

        div.appendChild(label);
        palette.appendChild(div);
    }
}

btn.addEventListener("click", generatePalette)

generatePalette();
