let selectHeader = select('#header-block')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')

      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    document.addEventListener('scroll', headerScrolled)
}

let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return

        let section = select(navbarlink.hash)
        if (!section) return

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {

            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
document.addEventListener('scroll', navbarlinksActive)

let backtotop = select('.back-to-top')
if (backtotop) {
const toggleBacktotop = () => {
    if (window.scrollY > 100) {
    backtotop.classList.add('active')
    } else {
    backtotop.classList.remove('active')
    }
}
window.addEventListener('load', toggleBacktotop)
document.addEventListener('scroll', toggleBacktotop)
}