function addRecipe(event){
    event.preventDefault();
    const data = collectDataFromForm();
    const newOl = generateOl(data);
    injectOToDOM(newOl);
    clearForm();
}
function collectDataFromForm(){
    const ingredient = document.getElementById('ingredient').value;
    const amount = document.getElementById('amount').value;
    return {
        ingredient,
        amount
    }
}
function generateOl(data){
    const newOl = 
    `<li class="list-group-item list-group-item-action list-group-item-info">ingredient: ${data.ingredient}, Amount: ${data.amount}</li>`
    return newOl;
}
function injectOToDOM(newOl){
    document.getElementById('list').innerHTML += newOl;
}
 function clearForm(){
    document.getElementById('recipeForm').reset();
}