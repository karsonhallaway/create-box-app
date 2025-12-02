const createBoxButton = document.getElementById("createBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

function getRandomColor() {
    const colors = ["red", "purple", "green", "blue", "black", "brown", "pink", "violet", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createBox() {
   const box = document.createElement("div"); // creates a new div
    box.classList.add("box"); //adds the class styling for box
    box.style.backgroundColor = getRandomColor();

    // how many boxes are out there carrying the cass .box styling
    box.innerText = document.querySelectorAll(".box").length + 1;

    boxContainer.appendChild(box);
}

function removeAllBoxes() {
    boxContainer.innerHTML = ""; // clear the container's inner html
}


 // listen to click event on the two butons 
createBoxButton.addEventListener("click", createBox);

removeBoxesButton.addEventListener("click", removeAllBoxes);