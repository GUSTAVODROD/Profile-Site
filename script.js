const navLinks = document.querySelectorAll('.nav-item')

const menuToggle = document.getElementById('navbarSupportedContent')

const bsCollapse = new bootstrap.Collapse(menuToggle)

const Nav= document.getElementsByClassName("Nav")

const boton= document.querySelector("button")

let expansion= boton["aria-expanded"]


navLinks.forEach((link) => {

    link.addEventListener('click', () => { bsCollapse.toggle() })
    
})
