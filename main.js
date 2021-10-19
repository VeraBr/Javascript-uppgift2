let queueButton = document.querySelector("#standInLine");
let fastTrackButton = document.querySelector("#fastTrack");
let checkInButton = document.querySelector("#checkedIn")
let listContainer = document.querySelector("#container");
let inputValue = document.querySelector("#inputName");

let checkInHeader = document.createElement("h2");
checkInHeader.innerText = "Incheckningskö";
listContainer.appendChild(checkInHeader);


let numberList = document.createElement("ol");
numberList.setAttribute("id", "lista");
listContainer.appendChild(numberList);

let queueArray = [];
let queueList2 = document.getElementById("lista");

if (queueArray.length === 0){
    let empty = document.createElement("p");
    empty.innerText = "There’s currently no people standing in line";
    checkInHeader.appendChild(empty);
}

queueButton.addEventListener("click",()=> {
    if (document.getElementById("inputName").value.length == 0) {
        alert("Empty");
    } else if (checkInHeader.children.length > 0) {
        emptyElement = document.querySelector("p");
        checkInHeader.removeChild(emptyElement);
        queueArray.push(inputValue.value);
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.appendChild(queueList);
        inputValue.value = "";
    }
        else {
        queueArray.push(inputValue.value);
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.appendChild(queueList);
        inputValue.value = "";
    }
})

fastTrackButton.addEventListener("click", ()=> {
    if (document.getElementById("inputName").value.length == 0) {
        alert("Empty");
    } else if (checkInHeader.children.length > 0) {
        emptyElement = document.querySelector("p");
        checkInHeader.removeChild(emptyElement);
        queueArray.unshift(inputValue.value);
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.prepend(queueList);
        inputValue.value = "";
    } else {
        queueArray.unshift(inputValue.value);
        let queueList = document.createElement("li");
        queueList.innerText = inputValue.value;
        numberList.prepend(queueList);
        inputValue.value = "";
    }
})

checkInButton.addEventListener("click", ()=> {
    queueArray.shift();
    let firstElement = document.querySelector("li")
    numberList.removeChild(firstElement);
    if (queueArray.length === 0){
        let empty = document.createElement("p");
        empty.innerText = "There’s currently no people standing in line";
        checkInHeader.appendChild(empty);
    }
})