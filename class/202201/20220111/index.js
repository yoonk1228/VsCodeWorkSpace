console.log('확인')

window.addEventListener('DOMContentLoaded', init)

/* 이동시키지 않는 기능을 만드려면 여기다가 코드작성을 해야한다. */
function submitHandler(e) {
  console.log(e) // submitEvent { ...
  // event가 발동된 이벤트의 명 등이 담겨있다.
  // console.log(e.target) // form에 대한 element들이 그대로 나온다.
  e.preventDefault() // submit 막기
  // submit을 막는이유 : input박스가 있더라면 form을 무조건 쓰게된다. (form에 input을 감싸서 데이터를 보내야한다.)
  // 이동하지않고 내용을 주고받을수 있어야 하기때문에 preventdDefault를 사용하면 된다.
  // submit할시 입력한 글이 없어지도록
  // 1. input박스를 먼저 선택.
  const inputElement = document.querySelector('#todoInput')
  const ulElement = document.querySelector('#todoList')
  const liElement = document.createElement('li')
  const spanElement = document.createElement('span')
  const span2Element = document.createElement('span')

  console.log(inputElement.value)
  // inputElement.value // input에 있는 value값을 가져와라
  // inputElement.value = '' // input내용이 비워짐.
  // value
  // innerHTML
  spanElement.innerHTML = inputElement.value // spanElement에 inputElement 입력
  span2Element.innerHTML = 'x'
  span2Element.addEventListener('click', removeHandler)// event를 주기

  liElement.append(spanElement)
  liElement.append(span2Element)
  // liElement.innerHTML = inputElement.value // input내용이 innerHTML로 인해 li로 적어짐.

  console.log(liElement)
  ulElement.append(liElement)
  inputElement.value = ''
}

// span2Element에 event를 주기위한 콜백함수
function removeHandler(e) {
  console.log(e.target.parentNode) // 내가 선택한 element가 어떤 내용이니?
  // parentNode 나의 상위에 있는 노드(element)를 선택
  e.target.parentNode.remove()
  // .remove() 선택한 엘리먼트 삭제.
}

// createElement -> js element를 만드는 것.
// qeurySelector와 반대다. js로 object를 만들고 그것을 html에 끼워넣는다.
// append()
// dom에 대한 객체에 대해서는 모두 사용가능.

function init() {
  console.log(`hello world!`)
  const submitElement = document.querySelector('#todoSubmit')
  const formElement = document.querySelector('#todoForm')
  // submitElement.addEventListener('click',submitHandler)
  formElement.addEventListener('submit', submitHandler)
}

// function addEventListener(type, call) {
//   if (type === 'submit') {
//     let text = call(213)
//     return text
//   }
// }
//
// function callback(num) {
//   return 'hello world!' + num
// }
//
// let result = addEventListener('submit', callback)
// console.log(result)

/* submit이 콘솔을 찍고 나온거라서 submit과 click은 다르다. */