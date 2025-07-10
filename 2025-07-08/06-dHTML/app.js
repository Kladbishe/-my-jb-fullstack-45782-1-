function addFruit(){
    const newFruit = document.getElementById('fruit').value;
    const list = document.getElementById('list');
    const newLi = `<li>${newFruit}</li>`;
    list.innerHTML += newLi;
    document.getElementById('fruit').value = '';
}