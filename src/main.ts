import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Muscle Clicker";
const emojiButton = "💪";
document.title = "Aaron's Game: " + gameName;

// Header
const header = document.createElement("h1");
header.innerHTML = gameName;

// Main Button
const button = document.createElement("button");
button.textContent = emojiButton;
button.style.fontSize = "60px";

// Counter for clicking
let counter: number = 0;
const counterText = document.createElement("div");
// counterText.style.fontSize = "25px";
updateCounter(counterText, counter);

// Clicking
const click_increase: number = 1;
button.addEventListener("click", () => {
  counter += click_increase;
  updateCounter(counterText, counter);
});

// Updates click amount on text
function updateCounter(counterText: HTMLDivElement, counter: number) {
  counterText.innerHTML = counter + " bicep curls completed";
}

app.append(header);
app.append(button);
app.append(counterText);
