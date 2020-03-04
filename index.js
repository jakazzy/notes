const menu = document.querySelector("#menu");
const drawer= document.querySelector('#drawer')
menu.addEventListener('click', function(e){
    drawer.classList.toggle('open')
    e.stopPropagation()
})