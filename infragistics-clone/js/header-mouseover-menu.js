const menuArr = document.querySelectorAll('.navigation-main > li')

function menuSelector() {
  for (let i=0; i<menuArr.length; i++) {
    menuArr[i].addEventListener('mouseover', () => {
      let menuBtn = menuArr[i].querySelector('a')
      let menuPopup = menuArr[i].querySelector('ul')
      menuBtn.addEventListener('mouseover', () => {
        menuPopup.style.display = `block`
      })
      menuBtn.addEventListener('mouseout', () => {
        menuPopup.style.display = `none`
      })
    })
  }
}

// function test() {
//
// }

function init() {
  menuSelector()
  // test()
}
init()