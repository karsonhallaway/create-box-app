const createBoxesButton = document.getElementById("createBox");

const removeBoxesButton = document.getElementById("removeBoxes");

const boxContainer = document.getElementById("boxContainer");

function getRandomColor() {
    const color = ["red", "green", "blue", "pink", "violet"];
    return color[Math.floor(Math.random() * color.length)];
}

function createBoxes() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomColor();

    box.innerText = document.querySelectorAll(".box") .length +1;
;

    boxContainer.appendChild(box);
}

function removeAllBoxes() {
    boxContainer.innerHTML = "";
}

createBoxesButton.addEventListener("click", createBoxes);

removeBoxesButton.addEventListener("click", removeAllBoxes);
