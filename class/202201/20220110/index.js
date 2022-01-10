console.log(`index.js`)

const btnElement = document.querySelector(`#btn`)
// document.querySelector 를 할때 const를 많이 쓰는편.
// 어차피 객체로 오기때문에 상관없다.
console.log(btnElement) // null

/* onload */
// 옛날문법 (13년전에도 사용함)
window.onload = function () {
    const btnElement = document.querySelector(`#btn`)
    console.log(`index.js : `,btnElement)
}

// 요즘에 씀
// 윈도우 객체에서도 이벤트를 추가할 수 있다.
// html이 로드되면 실행해달라.
window.addEventListener('DOMContentLoaded', () => {
    const btnElement = document.querySelector(`#btn`)
    console.log(`index.js DOM Content Loaded: `,btnElement)
})
// addEventListener 가 onload보다 먼저 실행된다.
// html만 렌더되고 실행된다.
// onload는 모든게 렌더되고 실행된다.
// 그래서 addEventListener가 더 빠르다.