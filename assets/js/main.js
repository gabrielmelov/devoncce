// Header toggle background-color
const header = document.querySelector('.cabecalho');

function ativaScroll() {
    header.classList.toggle('bg', scrollY > 0);
}

window.addEventListener('scroll', ativaScroll);

// Button mobile animation
const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu() {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.querySelector('#nav');
    const anchor = document.querySelectorAll('.nav-link')

    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
    // Close menu on click in link
    anchor.forEach(link => {
        link.addEventListener('touchstart', () => {
            nav.classList.remove('active')
        })
        link.addEventListener('click', () => {
            nav.classList.remove('active')
        })
        if(event.type === 'touchstart') {
            event.preventDefault()
        }    
    })
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);