// Variabler för alla element i HTML filen.
let queueButton = document.querySelector("#standInLine");
let fastTrackButton = document.querySelector("#fastTrack");
let checkInButton = document.querySelector("#checkedIn")
let listContainer = document.querySelector("#container");
let inputValue = document.querySelector("#inputName");

// Skapar incheckningskö-rubriken.
let checkInHeader = document.createElement("h2");
checkInHeader.innerText = "Incheckningskö";
listContainer.appendChild(checkInHeader);

// Skapar ol element för incheckningskön.
let numberList = document.createElement("ol");
listContainer.appendChild(numberList);

// Skriver ut att kön är tom från början.
let empty = document.createElement("p");
empty.innerText = "Just nu står ingen person i kö.";
checkInHeader.appendChild(empty);


queueButton.addEventListener("click",()=> {
    if (!document.getElementById("inputName").value.trim().length) { //Undviker att inputfältet lämnas tomt.
        alert("Rutan får inte lämnas tom");
    } else {
        empty.innerText = "";
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.appendChild(queueList);
        inputValue.value = "";
    }
})

fastTrackButton.addEventListener("click", ()=> {
    if (!document.getElementById("inputName").value.trim().length) {
        alert("Rutan får inte lämnas tom");
    } else {
        empty.innerText = "";
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.prepend(queueList);
        inputValue.value = "";
    }
})

checkInButton.addEventListener("click", ()=> {
    let firstElement = document.querySelector("li")
    numberList.removeChild(firstElement);
    if (numberList.children.length === 0){
        empty.innerText = "Just nu står ingen person i kö.";
    }
})