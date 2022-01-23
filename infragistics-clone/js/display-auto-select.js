const slideBtnArr = document.querySelectorAll('.slide-btn > li')
const slideList = document.querySelectorAll('.slides-content > li')

function contentSelector(n) {
  // if (i === slideBtnArr.length) {
  //   i = 0
  // } else {
  //   i = n-1
  // }
  // if (i === slideBtnArr.length) {
  //   i = 0;
  // } else {
  //   i = n-1;
  // }
  let i = n-1;

  for (let j = 0; j < slideBtnArr.length; j++) {
    if (i === j) {
      slideList[i].setAttribute(`style`, `display: flex`)
      console.log(slideList[i])
    } else {
      slideList[j].setAttribute(`style`, `display: none`)
      console.log(slideList[j])
    }
  }
}

function olSelector(n) {
  let i = n-1;

  for (let j = 0; j < slideBtnArr.length; j++)
    if (j === i) {
      slideBtnArr[i].setAttribute(`style`, `opacity: 0.2`)
    } else {
      slideBtnArr[i].setAttribute(`style`, `opacity: 0.6`)
    }
}

/* 버튼 클릭시 실행 */
function selectHandler(n) {
  addEventListener('click', () => {
    contentSelector(n)
  })
  addEventListener('mouseover', () =>{
    olSelector(n)
  })
}

/* 즉시실행 후 테스트 */
// selectHandler()
