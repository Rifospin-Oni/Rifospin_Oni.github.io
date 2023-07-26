const button = document.querySelector('.button')
let text = document.querySelector('.tabloid');
function estimate()
{
    text.textContent = 0 //Math.floor(Math.random() * 100)
}
button.addEventListener('click', estimate)