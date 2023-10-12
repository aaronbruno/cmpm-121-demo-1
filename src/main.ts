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
counterText.style.fontSize = "25px";
// updateCounter(counterText, counter, incrementPerSecond);

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

// # to increment per second
const incrementPerSecond: number = 1;

// Per second counter text
const autoCounterText = document.createElement("div");
autoCounterText.style.fontSize = "15px";
autoCounterText.innerHTML = incrementPerSecond + " curls per second";

// Increment by 1 each second
setInterval(() => {
  counter += click_increase;
  updateCounter(counterText, counter);
  console.log(counter + "bruh");
}, 1000);

app.append(header);
app.append(counterText);
app.append(button);
app.append(autoCounterText);
