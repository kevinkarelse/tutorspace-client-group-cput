const hamburgerButton = document.querySelector('#burger__button');
const nav = document.querySelector('#nav');

hamburgerButton.addEventListener('click', () => {

    if(!nav.classList.contains('nav__disabled')) {

        nav.classList.remove('nav');
        nav.classList.add('nave__disabled');

    }
    
    if(!nav.classList.contains('nav')) {

        nav.classList.remove('nav__disabled');
        nav.classList.add('nav');
        
    }
});
