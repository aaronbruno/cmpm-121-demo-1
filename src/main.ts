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
let totalCount: number = 0;
const counterText = document.createElement("div");
counterText.style.fontSize = "25px";

// Click to increase
const clickIncrease: number = 1;
button.addEventListener("click", () => {
  updateCounter(counterText, clickIncrease);
});

// Updates click amount on text
function updateCounter(counterText: HTMLDivElement, count: number) {
  totalCount = totalCount + count;
  counterText.innerHTML = totalCount + " bicep curls completed";
}

// # to increment per second
const incrementPerSecond: number = 1;

// Per second counter text
const autoCounterText = document.createElement("div");
autoCounterText.style.fontSize = "15px";
autoCounterText.innerHTML = incrementPerSecond + " curls per second";

autoCounter(incrementPerSecond);

function autoCounter(cps: number) {
  let previousTime = performance.now();
  window.requestAnimationFrame(updateCounterPerFrame);

  function updateCounterPerFrame() {
    const update = 1000 / cps;
    if (performance.now() - previousTime > update) {
      updateCounter(counterText, 1);
      previousTime = performance.now();
    }
    // console.log(previousTime);
    window.requestAnimationFrame(updateCounterPerFrame);
  }
}

app.append(header);
app.append(counterText);
app.append(button);
app.append(autoCounterText);
