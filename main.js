function onScroll() {
    if (scrollY > 0) {
        navigation.classList('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}


function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}




// Efeito ao carregar a pagina
ScrollReveal().reveal('#home'); 