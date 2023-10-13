import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Animal Rescue"; // changed theme from muscle clicker
const mainEmoji = "🐶";
document.title = "Aaron's Game: " + gameName;

// Header
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Sub-header
const gameDescription = document.createElement("h3");
gameDescription.innerHTML =
  "Rescue any and all animals from off the streets or from injuries!";
app.append(gameDescription);

// Main Button
const mainButton = document.createElement("button");
mainButton.textContent = mainEmoji;
mainButton.style.fontSize = "70px";
// mainButton.style.position = "absolute";
// mainButton.style.left = "20%";
// mainButton.style.top = "20%";
app.append(mainButton);

// Counter for clicking
let totalCount: number = 0;
const totalCountText = document.createElement("div");
totalCountText.style.fontSize = "20px";
totalCountText.innerHTML = `You have rescued ${totalCount.toFixed(0)} animals!`;
app.append(totalCountText);

// Increment per second
let totalIncrement: number = 0;
const totalIncrementText = document.createElement("div");
totalIncrementText.innerHTML = `${totalIncrement.toFixed(2)} animals/second`;
app.append(totalIncrementText);

// Interface
interface Item {
  name: string;
  costToUpgrade: number;
  incrementPerSecond: number;
  amountOfPurchases: number;
  button: HTMLButtonElement;
  description: string;
}

// Define the "Items"
const availableItems: Item[] = [
  {
    name: "🐈 Cat",
    costToUpgrade: 10,
    incrementPerSecond: 0.1,
    amountOfPurchases: 0,
    button: document.createElement("button"),
    description: "Not everyone likes cats but cats lives still matter",
  },
  {
    name: "🐰 Bunny",
    costToUpgrade: 100,
    incrementPerSecond: 2,
    amountOfPurchases: 0,
    button: document.createElement("button"),
    description: "Little Timmy lost his bunny again",
  },
  {
    name: "🦆 Duck",
    costToUpgrade: 1000,
    incrementPerSecond: 50,
    amountOfPurchases: 0,
    button: document.createElement("button"),
    description: "Donald Duck is homeless, lets help him",
  },
  {
    name: "🦁 Tiger",
    costToUpgrade: 10000,
    incrementPerSecond: 60,
    amountOfPurchases: 0,
    button: document.createElement("button"),
    description: "Um, I guess we can die trying?",
  },
  {
    name: "🦄 Unicorn",
    costToUpgrade: 100000,
    incrementPerSecond: 1000,
    amountOfPurchases: 0,
    button: document.createElement("button"),
    description: "A unicorn?!",
  },
];

mainButton.addEventListener("click", () => {
  incrementTotalOnClick();
});

createItem(availableItems);

for (let iterator: number = 0; iterator < availableItems.length; iterator++) {
  availableItems[iterator].button.addEventListener("click", () => {
    purchaseItem(availableItems[iterator]);
  });
}

// Auto incrementation using frames
let previousTime = 0;
window.requestAnimationFrame(autoCounter);

// Functions --------------------------------------------------

// On click increment by 1 unit
function incrementTotalOnClick() {
  totalCount += 1;
  totalCountText.innerHTML = `You have rescued ${totalCount.toFixed(
    0,
  )} animals!`;
}

// Purchase an upgrade/item
function purchaseItem(itemToPurchase: Item) {
  totalCount -= itemToPurchase.costToUpgrade;
  totalCountText.innerHTML = `You have rescued ${totalCount.toFixed(
    0,
  )} animals!`;
  totalIncrement += itemToPurchase.incrementPerSecond;
  totalIncrementText.innerHTML = `${totalIncrement.toFixed(2)} animals/second`;

  itemToPurchase.costToUpgrade *= 1.15;
  itemToPurchase.amountOfPurchases += 1;

  itemToPurchase.button.innerHTML = `${itemToPurchase.name} (${
    itemToPurchase.amountOfPurchases
  })<br>Rate: ${
    itemToPurchase.incrementPerSecond
  } | Cost: ${itemToPurchase.costToUpgrade.toFixed(2)}<br>${
    itemToPurchase.description
  }`;
}

// Create the actual button with its name, amout of purchases, rate, and cost
function createItem(items: Item[]) {
  for (let iterator: number = 0; iterator < items.length; iterator++) {
    items[
      iterator
    ].button.innerHTML = `${items[iterator].name}<br>Rate: ${items[iterator].incrementPerSecond} | Cost: ${items[iterator].costToUpgrade}
    <br>${items[iterator].description}`;
    items[iterator].button.disabled = true;
    app.append(items[iterator].button);
  }
}

// Checks if every upgrade/button is able to be bought
function checkButtonDisabled(items: Item[]) {
  for (let iterator: number = 0; iterator < items.length; iterator++) {
    if (totalCount >= items[iterator].costToUpgrade) {
      items[iterator].button.disabled = false;
    } else if (totalCount < items[iterator].costToUpgrade) {
      items[iterator].button.disabled = true;
    }
  }
}

// Updates the totalCount and totalCountText
function updateTotals(timepassed: number) {
  totalCount += totalIncrement * (timepassed / 1000);
  totalCountText.innerHTML = `You have rescued ${totalCount.toFixed(
    0,
  )} animals!`;
}

function autoCounter(time: number) {
  const timePassed: number = time - previousTime;
  previousTime = time;

  // Debugging help
  // console.log(totalIncrement);

  updateTotals(timePassed);
  checkButtonDisabled(availableItems);
  window.requestAnimationFrame(autoCounter);
}
