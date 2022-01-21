const menuArr = document.querySelectorAll('.navigation-main > li')
const popDD = document.querySelector('.menu-full-width-wrap > ul')

function menuSelector() {
  for (let i=0; i<menuArr.length; i++) {
    menuArr[i].addEventListener('mouseover', () => {
      let menuBtn = menuArr[i].querySelector('a')
      let menuPopup = menuArr[i].querySelector('ul')
      if (i === 0) {
        menuBtn.addEventListener('mouseover', () => menuPopup.style.display = `flex`)
        menuBtn.addEventListener('mouseout', () => menuPopup.style.display = `none`)
      } else {
        // menuBtn.addEventListener('mouseover', () => menuArr.style.display = `block`)
        menuBtn.addEventListener('mouseover', () => console.log(menuArr[i]))
        menuBtn.addEventListener('mouseout', () => menuArr.style.display = `none`)
      }
    })
  }
}

function popupOver () {
  popDD.addEventListener('mouseover', () => popDD.style.display = `flex`)
  popDD.addEventListener('mouseout', () => popDD.style.display = `none`)
}
// function test() {
//
// }

/* 페이지 진입시 실행 */
function init() {
  menuSelector()
  popupOver()
  // test()
}
init()