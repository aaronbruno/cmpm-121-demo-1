import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Aaron's Test Game";

const emojiButton = "🏋️";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const button = document.createElement("button");
button.textContent = emojiButton;

app.append(header);
app.append(button);

// Webpage alert to show that button was clicked
function handleClick() {
  alert("Button clicked!");
}

// Listens if button is clicked, and if it is run function
if (button) {
  button.addEventListener("click", handleClick);
}
