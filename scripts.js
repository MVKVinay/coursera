let buttonEl = document.getElementById("buttonClick");
const cars = ["Saab", "Volvo", "BMW", "Audi"];
let tableEl = document.createElement("table");

buttonEl.addEventListener("click",view);

function view() {
    for (let i = 1; i <= cars.length; i++) {
        let rowEl = document.createElement("tr");
        let dataEl = document.createElement("td");
        let data2El = document.createElement("td");
        data2El.textContent = i;
        data2El.classList.add("tablestyle");
        dataEl.textContent = cars[i - 1];
        dataEl.classList.add("tablestyle");
        rowEl.appendChild(data2El);
        rowEl.appendChild(dataEl);
        tableEl.appendChild(rowEl);
    }
    tableEl.classList.add("tablestyle");
    document.body.appendChild(tableEl);
    buttonEl.classList.add("d-none");
    
}
