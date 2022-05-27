window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    // console.log(scrollY) Imprime posição da rolagem
    activateMenuAtCurrentSection()
}


function activateMenuAtCurrentSection(){
    const targetLine = scrollY + innerHeight /2
    //verificar se a seção passou da linha
    const sectionTop = home.offsetTop
    const sectionHeight = home.offsetHeight
    //console.log(sectionTop)
    //console.log(sectionHeight)

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    console.log('O topo da seção passou da linha?', sectionTopReachOrPassedTargetLine)
    
}
function showNavOnScroll(){
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
         navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 1468.5) {
        backToTopButton.classList.add('show')
    } else {
         backToTopButton.classList.remove('show')
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
#services .card
#about,
#about header,
#about .content`)  // Efeito ao carregar a pagina, ordem de carregamento.


//  function ScrollReveal() {
//      var options = {
//          reveal: function() {}
//      }

//      return options
//  }


