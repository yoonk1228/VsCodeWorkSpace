const menuArr = document.querySelectorAll('.navigation-main > li')
/* Design & Development Btn */
const btnDD = document.querySelector('.navigation-submenu')
const menuDD = document.querySelector('.menu-full-width')
const popDD = document.querySelector('.menu-full-width-wrap')

function menuSelector() {
  for (let i=0; i<menuArr.length; i++) {
    if (i === 0) {
      btnDD.addEventListener('mouseover', () => {
        popDD.style.opacity = `1`
        popDD.setAttribute(`style`, `visibility: visible;`)
      })
      popDD.addEventListener('mouseover', () => {
        popDD.style.opacity = `1`
        popDD.setAttribute(`style`, `visibility: visible;`)
      })
      menuDD.addEventListener('mouseout', () => {
        // popDD.style.opacity = `0`
        popDD.setAttribute(`style`, `visibility: hidden;`)
      })
    } else {
      menuArr[i].addEventListener('mouseover', () => {

      })
    }
  }
}

// function test() {
//
// }

/* 페이지 진입시 실행 */
function init() {
  menuSelector()
  // test()
}
init()