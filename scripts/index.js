const button = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-list');

button.addEventListener('click', function() {
    if(!menu.classList.contains('active')){
        menu.classList.add('active');
    }else{
        menu.classList.remove('active')
    }
}, false);