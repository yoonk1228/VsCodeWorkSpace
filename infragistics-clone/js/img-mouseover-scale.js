const imgArr = document.querySelectorAll('.ui-card > .ui-card-link')

function imgMouseOver() {
  for (let i=0; i<imgArr.length; i++) {
    imgArr[i].addEventListener(`mouseover`, () => {
      imgArr[i].style.transform = `scale(1.1)`;
    })
    imgArr[i].addEventListener(`mouseout`, () => {
      imgArr[i].style.transform = `scale(1)`;
    })
  }
}

function init() {
  imgMouseOver()
}
init()