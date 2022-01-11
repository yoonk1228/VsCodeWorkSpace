const formElement = document.querySelector('#todoForm')
// const allElement = document.querySelector('#allList') // 추가된 투두 리스트들

/* 메인 핸들러 */
function handler(e) {
  const inputElement = document.querySelector('.con-input')
  const resetElement = document.querySelector('.btn-reset')
  const ulElement = document.querySelector('#todoList')
  const liElement = document.createElement('li')
  const spanTodoElement = document.createElement('span')
  const spanCloseElement = document.createElement('span')

  e.preventDefault()
  // console.log(e)
  console.log(inputElement.value) // input에 입력한 데이터

  if (inputElement.value !== '') {
    spanTodoElement.innerHTML = inputElement.value
    spanCloseElement.innerHTML = 'X'
    spanCloseElement.style = 'cursor: pointer;'
    spanCloseElement.addEventListener('click',removeBtn)
    /* allElement를 지우기위해 함수 참조 */
    // resetElement.addEventListener('click',allRemoveBtn)

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

/* 클릭시 리스트 전체 닫힘 */
function allRemoveBtn(e) {
  e = allElement
  console.log(e) // 정상
  // e.target.remove() // 아직 구현불가
}

/* 디폴트 함수 */
function init() {
  console.log('init complete')
  formElement.addEventListener('submit',handler)
}
init()