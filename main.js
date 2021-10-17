let queueButton = document.querySelector("#standInLine");
let fastTrackButton = document.querySelector("#fastTrack");
let checkInButton = document.querySelector("#checkedIn")
let listContainer = document.querySelector("#container");
let inputValue = document.querySelector("#inputName");

let checkInHeader = document.createElement("h2");
checkInHeader.innerText = "Incheckningskö";
listContainer.appendChild(checkInHeader);


let numberList = document.createElement("ol");
listContainer.appendChild(numberList);

//let queueArray = [];

queueButton.addEventListener("click",()=> {
    //queueArray.push(inputValue.value);
    let queueList = document.createElement("li");
    queueList.innerText = inputValue.value;
    numberList.appendChild(queueList);
    inputValue.value = "";
})

fastTrackButton.addEventListener("click", ()=> {
    //queueArray.unshift(inputValue.value);
    let queueList = document.createElement("li");
    queueList.innerText = inputValue.value;
    numberList.prepend(queueList);
    inputValue.value = "";
    //console.log(queueArray);
})

checkInButton.addEventListener("click", ()=> {
    //queueArray.shift();
    let firstElement = document.querySelector("li")
    numberList.removeChild(firstElement);
})

