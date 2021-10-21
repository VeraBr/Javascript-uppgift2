// Variabler för alla element i HTML filen.
let queueButton = document.querySelector("#standInLine");
let fastTrackButton = document.querySelector("#fastTrack");
let checkInButton = document.querySelector("#checkIn");
let inputValue = document.querySelector("#inputName");
let queueOfPeople = document.querySelector("#queue");

// Skapar ol element för incheckningskön.
let numberList = document.createElement("ol");
queueOfPeople.appendChild(numberList);

// Skriver ut att kön är tom från början. 
let emptyQueue = document.createElement("p");
emptyQueue.innerText = "Just nu står ingen person i kö.";
queueOfPeople.appendChild(emptyQueue);


queueButton.addEventListener("click",()=> {
    if (!document.getElementById("inputName").value.trim().length) { //Undviker att inputfältet lämnas tomt.
        alert("Rutan får inte lämnas tom");
    } else {
        emptyQueue.innerText = "";
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
        emptyQueue.innerText = "";
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
        emptyQueue.innerText = "Just nu står ingen person i kö.";
    }
})