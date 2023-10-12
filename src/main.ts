import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Muscle Clicker";
const emojiButton = "💪";
const emojiButton2 = "🏋🏻‍♂️"; // 🎧
document.title = "Aaron's Game: " + gameName;

// Header
const header = document.createElement("h1");
header.innerHTML = gameName;

// Main Button
const button = document.createElement("button");
button.textContent = emojiButton;
button.style.fontSize = "60px";

// Side Button for auto upgrades (for auto counting)
const sideButton = document.createElement("button");
sideButton.textContent = emojiButton2;
sideButton.style.fontSize = "40px";

// Counter for clicking
let totalCount: number = 0;
const counterText = document.createElement("div");
counterText.style.fontSize = "25px";

// # to increment per second
let incrementPerSecond: number = 1;

// Click to increase
const clickIncrease: number = 1;
button.addEventListener("click", () => {
  updateCounter(counterText, clickIncrease);
  // updateCounter(counterText, totalIncrement);
});

const upgradeCost: number = -10;
// Click to buy upgrade
sideButton.addEventListener("click", () => {
  updateCounter(counterText, upgradeCost);
  updateAuto(autoCounterText, incrementPerSecond);
});

// Updates click amount on text
const text = " Muscle Mass Gained!";
function updateCounter(counterText: HTMLDivElement, count: number) {
  totalCount += count;
  counterText.innerHTML = totalCount + text;
}

const text2 = " muscle mass per second";
let totalIncrement: number = 0;
function updateAuto(autoText: HTMLDivElement, count: number) {
  totalIncrement += count;
  autoText.innerHTML = totalIncrement + text2;
}

// Per second counter text
const autoCounterText = document.createElement("div");
autoCounterText.style.fontSize = "15px";
autoCounterText.innerHTML = totalIncrement + " muscle mass per second";

autoCounter(incrementPerSecond);

function autoCounter(mmps: number) {
  let previousTime = performance.now();
  window.requestAnimationFrame(updateCounterPerFrame);

  function updateCounterPerFrame() {
    const update = 1000 / mmps;
    if (performance.now() - previousTime > update) {
      updateCounter(counterText, totalIncrement);
      previousTime = performance.now();
    }
    // console.log(previousTime);
    window.requestAnimationFrame(updateCounterPerFrame);
    checkButton();
  }
}

function checkButton() {
  if (totalCount >= 10) {
    sideButton.disabled = false;
  } else {
    sideButton.disabled = true;
  }
}

app.append(header);
app.append(counterText);
app.append(button);
app.append(sideButton);
app.append(autoCounterText);
