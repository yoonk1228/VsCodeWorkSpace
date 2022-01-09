let imgPos = 0;
let position = 0;
const imgWidth = 800;
const prevBtn = document.querySelector(".btn-prev")
/* id로 지정된 element를 호출 할때는 getElementById */
/* class로 지정된 element를 지목해서 호출 할때는 querySelector가 유리 */
const nextBtn = document.querySelector('.btn-next')
const images = document.querySelector('.album')

function prev() {
    if (imgPos > 0) {
        nextBtn.removeAttribute('disabled')
        imgPos = imgPos - 1;
        console.log('이미지 번호 = ' + imgPos)
        position += imgWidth;
        images.style.transform = `translateX(${position}px)`;
    }
    if (imgPos === 0 ) {
        prevBtn.setAttribute('disabled', 'true')
    }
}

function next() {
    if (imgPos < 3) {
        prevBtn.removeAttribute('disabled')
        imgPos = imgPos + 1;
        console.log('이미지 번호 = ' + imgPos)
        position -= imgWidth;
        images.style.transform = `translateX(${position}px)`
    }
    if (imgPos === 3) {
        nextBtn.setAttribute('disabled', 'true')
    }
}

/* 데이터 초기화, 초기설정, 즉시적용. */
function init() {
    prevBtn.setAttribute('disabled', 'true')
    prevBtn.addEventListener('click',prev)
    nextBtn.addEventListener('click',next)
}
init()