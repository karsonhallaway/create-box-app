const createBoxButton = document.getElementById("createBox");

const removeBoxesButton = document.getElementById("removeBoxes");

const boxContainer = document.getElementById("boxContainer");

function createBox() {
    const box = document.createElement("div"); // create a new div
    box.classList.add("box"); // attach the class box to it
    box.style.backgroundColor = "red";
    box.innerText = 2;

    boxContainer.appendChild(box);
}

function removeAllBoxes() {

}

// listen to click events on the two buttons
createBoxButton.addEventListener("click", createBox);

removeBoxesButton.addEventListener("click", removeAllBoxes);

