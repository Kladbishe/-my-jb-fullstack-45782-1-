// setInterval(() => {
//     const currentTime =(new Date()).toLocaleString();
// document.getElementById('correct_time').textContent =`time ${currentTime}`}, 1000);



setInterval(() => {
    const now =(new Date()).toLocaleString();
document.getElementById('correct_time').innerHTML = now}, 1000);
