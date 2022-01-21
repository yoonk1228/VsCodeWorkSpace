const logo = document.querySelectorAll('.wt-logo > li:before')
const logoBack = document.querySelectorAll('.wt-logo > li')
const ul = document.querySelector('.wt-list-wrap > .wt-list-slide > ul')
const listWidth = 1000;

// n을 받고,  - (800 * n) 만큼 translateX 하여 ul을 이동시킨다.
function clickLogo(n) {
  // const select = logo.indexOf(n.parentNode, n)
  console.log(logo)
  // logo.addEventListener('click', () => {
  //   // for (let i=0; i<logo.length; i++) {
  //   //   if (i === j) {
  //   //     logo[i].style.opacity = '0';
  //   //     console.log(logo[i])
  //   //   } else {
  //   //     logo[i].style.opacity = '1';
  //   //     console.log(logo[i])
  //   //   }
  //   // }
  //   console.log(logo)
  // })
  // logo.addEventListener('click', () => console.log(select)
  console.log(logoBack[n-1])
  j = n-1
  switch (j) {
    case 0:
      ul.style.transform = `translateX(0)`
      break;
    case 1:
      ul.style.transform = `translateX(-${listWidth*j}px)`
      break;
    case 2:
      ul.style.transform = `translateX(-${listWidth*j}px)`
      break;
    case 3:
      ul.style.transform = `translateX(-${listWidth*j}px)`
      break;
  }
}


// console.log(logo)

function logoClickHandler(n) {
  clickLogo(n)
}