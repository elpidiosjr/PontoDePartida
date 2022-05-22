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

ScrollReveal({
  origin:'top', // direção do carregamento da pagina, left, right ...
  distance: '30px',
  duration: 700, // entende como milisegundos, 700ms
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card`)  // Efeito ao carregar a pagina, ordem de carregamento.


//  function ScrollReveal() {
//      var options = {
//          reveal: function() {}
//      }

//      return options
//  }