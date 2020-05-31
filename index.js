// Write your code here!
document.getElementById('main').remove();
let victoryHeader = document.createElement('h1');
document.body.innerHTML = "<h1 id='victory'></h1>"
let newHeader = document.getElementById('victory');
newHeader.innerHTML = "YOUR-NAME is the champion"