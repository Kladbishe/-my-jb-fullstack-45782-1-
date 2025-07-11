
let count = 0;
function addColor(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    const currentCount = numColor()
    injectOToDOM(newTR, currentCount);
    clearForm()
}

function collectDataFromForm() {
    const color = document.getElementById('textColor').value;
    return {
        color
    }
}
function generateTR(data) {
    const newTR =
    `
        <tr>
            <td>${data.color}</td>
            <td >
            <input style="background-color: ${data.color}" type="text" readonly>
            </td>
        </tr>
    `
    return newTR;
}

function injectOToDOM(newTR, count) {
    document.getElementById("list-color").innerHTML += newTR;
    document.getElementById("numColor").innerHTML = `number color: ${count}`;
}
function clearForm() {
    document.getElementById('add-Color').reset();
}

function numColor() {
    count++
    return count;
}
