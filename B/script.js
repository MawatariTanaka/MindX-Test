const colorDisplay = document.getElementById("color-display");
const generateBtn = document.getElementById("generate-btn");
const hexCode = document.getElementById("hex-code");
const copyBtn = document.getElementById("copy-btn");
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const gradientContainer = document.getElementById("gradient-container");

function generateColor() {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colorDisplay.style.backgroundColor = color;
  hexCode.textContent = color;
}

generateBtn.addEventListener("click", generateColor);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent);
  alert("Copied to clipboard!");
});

gradientContainer.addEventListener("input", () => {
  const color1Value = color1.value;
  const color2Value = color2.value;
  document.body.style.background = `linear-gradient(to right, ${color1Value}, ${color2Value})`;
});
