const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 800;

// Create 800 squares
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Hover effect
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  container.appendChild(square);
}

// Set random color
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
}

// Remove color smoothly
function removeColor(element) {
  element.style.background = "#1d1d1d"; // fades out in 1s due to CSS transition
}

// Pick a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
