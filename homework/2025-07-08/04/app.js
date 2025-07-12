
let count = 0;
function addPicDec(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    const currentCount = numPic();
    injectOToDOM(newTR, currentCount);
    clearForm()
}

function collectDataFromForm() {
    const description = document.getElementById('description').value;
    const picture = document.getElementById('picture').value;
    return {
        description,
        picture
    }
}
function generateTR(data) {
    const newTR =
    `
        <tr>
            <td>${data.description}</td>
            <td >
            <td><img src=${data.picture}">
            </td>
        </tr>
    `
    return newTR;
}

function injectOToDOM(newTR, count) {
    document.getElementById("Description-pic").innerHTML += newTR;
    document.getElementById("numPic").innerHTML = `number picture: ${count}`;
}
function clearForm() {
    document.getElementById('add-Color').reset();
}

function numPic() {
    count++
    return count;
}
