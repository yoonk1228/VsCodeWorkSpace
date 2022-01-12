const formElement = document.querySelector('#todoForm')
let updateFlag = true // on off 스위치 역할
// const allElement = document.querySelector('#allList') // 추가된 투두 리스트들

/* 메인 핸들러 */
function handler(e) {
  const inputElement = document.querySelector('.con-input')
  const ulElement = document.querySelector('#todoList')
  const liElement = document.createElement('li')
  const spanTodoElement = document.createElement('span')
  const spanCloseElement = document.createElement('span')
  const resetBtn = document.querySelector('.btn-reset')

  e.preventDefault()
  // console.log(e)
  console.log(inputElement.value) // input에 입력한 데이터

  if (inputElement.value !== '') {
    spanTodoElement.innerHTML = inputElement.value
    spanCloseElement.innerHTML = 'X'
    spanCloseElement.style = 'cursor: pointer;'
    spanCloseElement.addEventListener('click',removeBtn)
    /* allElement를 지우기위해 함수 참조 */
    resetBtn.addEventListener('click',allRemoveBtn)
    spanTodoElement.addEventListener('click', updateBtn)

    liElement.append(spanTodoElement)
    liElement.append(spanCloseElement)
    console.log(liElement) // liElement에 li 하나, span2개 들어갔는지 확인

    ulElement.append(liElement)
    console.log(ulElement)
    inputElement.value = ''

  } else {
    window.alert('내용을 적으세요!')
  }
}

/* 클릭시 닫힘 */
function removeBtn(e) {
  console.log(e.target.parentNode)
  e.target.parentNode.remove()
}

function updateBtn(e) {
  // if (updateFlag) {
  //   // console.log(e.target, e.target.innerHTML)
  //   // let content = e.target.innerHTML
  //   // e.target.innerHTML = ''
  //   // console.log(content) // '' 로 날려도 내용은 가지고있다.
  //   //
  //   // const conInputElement = document.createElement('input')
  //   // conInputElement.value = content
  //   // e.target.append(conInputElement)
  //   updateFlag = false
  // } else {
  //   return
  // }

  if (updateFlag) {
    updateFlag = false
  } else {
    return // updateFlag를 아무값도 없는상태로 빠져나오는 return
  }
  // console.log(updateFlag)
  // updateFlag = !updateFlag
  // 삼항연산자 : if문을 한줄로 줄이는 구문

  console.log(e.target, e.target.innerHTML)
  let content = e.target.innerHTML
  e.target.innerHTML = ''
  console.log(content) // '' 로 날려도 내용은 가지고있다.

  const conInputElement = document.createElement('input')
  conInputElement.value = content
  e.target.append(conInputElement)

  conInputElement.addEventListener('keypress',keypressHandler)
}

function keypressHandler(e) {
  // console.log(e.keyCode) // enter치면 13번
  if (e.keyCode !== 13) {
    return
  }
  let content = e.target.value // content에 value값을 담아놨다
  let node = e.target.parentNode
  node.innerHTML = ''
  node.innerHTML = `<span>`+content+`</span>`
  // console.log(e.target.value)
  updateFlag = true
}

/* newUlElement(생성할 새로운 ul을 위한 태그 함수 */
/* ul id='todoList' */
function newUlTag(tag,option) {
  const newUl = Object.assign(document.createElement(tag),option)
  console.log(newUl)
  return newUl
}

/* 클릭시 리스트 전체 닫힘 */
function allRemoveBtn(e) {
  let ulId = {id:'todoList'}
  let tagTest = newUlTag('ul',ulId)
  console.log(tagTest) // 요거를 content안에 입력시켜야 한다...

  // const newUlElement = document.createElement('ul', ulId)
  // const newUlElement = document.createElement()

}

/* 디폴트 함수 */
function init() {
  console.log('init complete')
  formElement.addEventListener('submit',handler)
}
init()