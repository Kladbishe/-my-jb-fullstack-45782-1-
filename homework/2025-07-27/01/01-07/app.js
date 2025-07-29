'use strict';
document.getElementById('button').addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
    setTimeout(() => {
        alert("Done");
    }, 1000)
})


