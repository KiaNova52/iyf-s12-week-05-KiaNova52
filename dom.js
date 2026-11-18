
const heading = document.getElementById("main-heading");
console.log(heading);

const descriptions = document.getElementsByClassName("description");
console.log(descriptions);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const button = document.querySelector("#my-button");
console.log(button);

const listItems = document.querySelectorAll("#my-list li");
console.log(listItems);

console.log(heading.parentElement);

const myList = document.getElementById("my-list");
console.log(myList.children);

console.log(myList.firstElementChild);

console.log(myList.lastElementChild);

console.log(button.nextElementSibling);


heading.textContent = "DOM Manipulation Is Fun!";

button.textContent = "Click Me!";

button.setAttribute("title", "Click this button");

button.dataset.status = "active";

heading.style.color = "blue";

heading.style.backgroundColor = "lightyellow";

const newParagraph = document.createElement("p");

newParagraph.textContent = "I created this element using JavaScript!";

document.body.appendChild(newParagraph);

const newItem = document.createElement("li");
newItem.textContent = "Learn DOM Manipulation";

myList.appendChild(newItem);

myList.removeChild(myList.lastElementChild);

const firstItem = myList.firstElementChild;

const clonedItem = firstItem.cloneNode(true);

clonedItem.textContent = "Learn React";

myList.appendChild(clonedItem);

function addNavItem(text, href) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);
    myList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

const eventButton = document.createElement("button");
eventButton.textContent = "Click Me";

document.body.appendChild(eventButton);

eventButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

eventButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

function handleClick() {
    console.log("Handled!");
}

eventButton.addEventListener("click", handleClick);