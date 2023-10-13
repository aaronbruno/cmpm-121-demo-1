import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Will probably change emojis and descriptions later
// ... im running out of ideas with this one
const gameName = "Muscle Clicker";
const mainEmoji = "💪";
const upgradeEmoji1 = "🏋🏻‍♂️";
const upgradeEmoji2 = "🎧";
const upgradeEmoji3 = "🍳";
document.title = "Aaron's Game: " + gameName;

// Header
const header = document.createElement("h1");
header.innerHTML = gameName;

// Main Button
const mainButton = document.createElement("button");
mainButton.textContent = mainEmoji;
mainButton.style.fontSize = "70px";
// mainButton.style.position = "absolute";
// mainButton.style.left = "20%";
// mainButton.style.top = "20%";

// Side Buttons for auto upgrades (for auto counting)
const upgradeButton1 = document.createElement("button");
upgradeButton1.textContent = upgradeEmoji1;
upgradeButton1.style.fontSize = "30px";

const upgradeButton2 = document.createElement("button");
upgradeButton2.textContent = upgradeEmoji2;
upgradeButton2.style.fontSize = "30px";

const upgradeButton3 = document.createElement("button");
upgradeButton3.textContent = upgradeEmoji3;
upgradeButton3.style.fontSize = "30px";

// Counter for clicking
let totalCount: number = 0;
const counterText = document.createElement("div");
counterText.style.fontSize = "25px";
const text = " Muscle Mass Gained!";
counterText.innerHTML = totalCount.toFixed(2) + text;

// # to increment per second
const incrementPerSecond1: number = 0.1;
const incrementPerSecond2: number = 2.0;
const incrementPerSecond3: number = 50.0;

// Purchases number for each upgrade
let numberOfPurchases1: number = 0;
let numberOfPurchases2: number = 0;
let numberOfPurchases3: number = 0;

// Names for each upgrade
const upgradeName1 = document.createElement("div");
upgradeName1.style.fontSize = "20px";
upgradeName1.innerHTML = "Weightlifting (" + numberOfPurchases1 + ")";

const upgradeName2 = document.createElement("div");
upgradeName2.style.fontSize = "20px";
upgradeName2.innerHTML = "Music Buff (" + numberOfPurchases2 + ")";

const upgradeName3 = document.createElement("div");
upgradeName3.style.fontSize = "20px";
upgradeName3.innerHTML = "Protein/Bulking (" + numberOfPurchases3 + ")";

// the cost of each upgrade
const upgradeCost1: number = 10;
const upgradeCost2: number = 100;
const upgradeCost3: number = 1000;

// Click to increase
const clickIncrease: number = 1;
mainButton.addEventListener("click", () => {
  updateCounter(counterText, clickIncrease);
  // updateCounter(counterText, totalIncrement);
});

// Click to buy upgrade
upgradeButton1.addEventListener("click", () => {
  updateCounter(counterText, -upgradeCost1);
  updateAuto(autoCounterText, incrementPerSecond1);
  numberOfPurchases1 += 1;
  upgradeName1.innerHTML = "Weightlifting (" + numberOfPurchases1 + ")";
});

upgradeButton2.addEventListener("click", () => {
  updateCounter(counterText, -upgradeCost2);
  updateAuto(autoCounterText, incrementPerSecond2);
  numberOfPurchases2 += 1;
  upgradeName2.innerHTML = "Music Buff (" + numberOfPurchases2 + ")";
});

upgradeButton3.addEventListener("click", () => {
  updateCounter(counterText, -upgradeCost3);
  updateAuto(autoCounterText, incrementPerSecond3);
  numberOfPurchases3 += 1;
  upgradeName3.innerHTML = "Protein/Bulking (" + numberOfPurchases3 + ")";
});

// Updates click amount on text
function updateCounter(counterText: HTMLDivElement, count: number) {
  totalCount += count;
  counterText.innerHTML = totalCount.toFixed(2) + text;
}

const text2 = " muscle mass per second";
let totalIncrement: number = 0;
function updateAuto(autoText: HTMLDivElement, count: number) {
  totalIncrement += count;
  autoText.innerHTML = totalIncrement.toFixed(2) + text2;
}

// Per second counter text
const autoCounterText = document.createElement("div");
autoCounterText.style.fontSize = "15px";
autoCounterText.innerHTML =
  totalIncrement.toFixed(2) + " muscle mass per second";

// Upgrade Descriptions
const upgradeDescription1 = document.createElement("div");
upgradeDescription1.style.fontSize = "15px";
upgradeDescription1.innerHTML =
  "Cost: " + upgradeCost1 + " | " + incrementPerSecond1 + " mmps";

const upgradeDescription2 = document.createElement("div");
upgradeDescription2.style.fontSize = "15px";
upgradeDescription2.innerHTML =
  "Cost: " + upgradeCost2 + " | " + incrementPerSecond2 + " mmps";

const upgradeDescription3 = document.createElement("div");
upgradeDescription3.style.fontSize = "15px";
upgradeDescription3.innerHTML =
  "Cost: " + upgradeCost3 + " | " + incrementPerSecond3 + " mmps";

autoCounter();

function autoCounter() {
  let previousTime = performance.now();
  window.requestAnimationFrame(updateCounterPerFrame);

  function updateCounterPerFrame() {
    const update = 1000 / 1;
    if (performance.now() - previousTime > update) {
      updateCounter(counterText, totalIncrement);
      previousTime = performance.now();
    }
    // console.log(previousTime);
    console.log(numberOfPurchases1);
    window.requestAnimationFrame(updateCounterPerFrame);
    checkButton(upgradeButton1, upgradeCost1);
    checkButton(upgradeButton2, upgradeCost2);
    checkButton(upgradeButton3, upgradeCost3);
  }
}

function checkButton(buttonToCheck: HTMLButtonElement, unitsNeeded: number) {
  if (totalCount >= unitsNeeded) {
    buttonToCheck.disabled = false;
  } else {
    buttonToCheck.disabled = true;
  }
}

app.append(header);
app.append(counterText);
app.append(mainButton);
app.append(autoCounterText);

app.append(upgradeName1);
app.append(upgradeButton1);
app.append(upgradeDescription1);

app.append(upgradeName2);
app.append(upgradeButton2);
app.append(upgradeDescription2);

app.append(upgradeName3);
app.append(upgradeButton3);
app.append(upgradeDescription3);
