const ANIMAL_KEY_NAME = "animal";

function addAnimal(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    injectOToDOM(newTR);
    saveAnimalToLocalStorage(data);
    clearForm()
}

function collectDataFromForm() {
    const type = document.getElementById('typeOfAnimal').value;
    const name = document.getElementById('nameOfAnimal').value;
    const age = document.getElementById('ageOfAnimal').value;
    const pic = document.getElementById('URLAnimal').value;
    return {
        type,
        name,
        age,
        pic
    }
}

function generateTR(data) {
    const newTR =
        `
    <tr>
        <td>${data.type}</td>
        <td>${data.name}</td>
        <td> ${data.age} </td>
        <td><img width="150" src="${data.pic}"></td>
    </tr>
    `
    return newTR;
}

function injectOToDOM(newTR) {
    document.getElementById('animal-list').innerHTML += newTR;
}

function saveAnimalToLocalStorage(data) {
    const animalJSON = localStorage.getItem("animal-list") || "[]";
    const animals = JSON.parse(animalJSON)
    animals.push(data);
    localStorage.setItem("animal-list", JSON.stringify(animals));
}

function loadAnimalsFromStorage() {
    const animalJSON = localStorage.getItem("animal-list");
    if (animalJSON) {
        const animals = JSON.parse(animalJSON);
        for (const animal of animals) {
            const newTR = generateTR(animal);
            injectOToDOM(newTR);
        }
    }
}


function clearForm() {
    document.getElementById("form-animals").reset()
}
loadAnimalsFromStorage();