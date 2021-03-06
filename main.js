let code = `
.skin{
    position: relative;
    height: 50vh;
    background-color: #ffe600;
}
/* 鼻子 */
.nose{
    position: relative;
    border: 10px solid;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 2;
    border-width: 10px 10px 0px 10px
}
@keyframes wave {
    0% {
        transform: rotate(0);
    }
    33% {
        transform: rotate(15deg);
    }
    66% {
        transform: rotate(-15deg);
    }
    100% {
        transform: rotate(0);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.nose::before{
    content: '';
    display: block;
    width: 10px;
    height: 15px;
    position: relative;
    margin-left: -5px;
    background-color: #ffe600;
}
.yuanhu{
    position: absolute;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0px 0px;
    background-color: black;
}
/* 眼睛 */
.eye{
    border: 2px solid #000000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    border-radius: 50%;
    background-color: #2e2e2e;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000000;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 1px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
/* 嘴巴 */
.mouth{
    width: 160px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 165px;
    margin-left: -80px;
}
.mouth.up{
    position: relative;
    top: -10px;
}
.mouth .up .lip{
    border: 3px solid #000000;
    width: 80px;
    height: 20px;
    z-index: 1;
    background-color: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-color: transparent transparent transparent black;
    transform: rotate(-16deg) translateX(6px);
    position: absolute;
    left: 50%;
    margin-left: -80px;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-color: transparent black transparent transparent;
    transform: rotate(16deg) translateX(-6px);
    position: relative;
    left: 80px;
}
.mouth .down {
    position: absolute;
    height: 140px;
    width: 150px;
    top: 5px;
    left: 5px;
    overflow: hidden;
}
.mouth .down .yuan1 {
    width: 120px;
    height: 1000px;
    border: 3px solid #000000;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -60px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    width: 120px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    transform: translateY(885px);
    border-radius: 75px/100px;
    background-color: #ff485f;
}
.face{
    position: absolute;
    border: 3px solid #000000;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    z-index: 1;
    border-radius: 50%;
    background-color: #ff0000;
}
.face.left{
    transform: translateX(-150px);
}
.face.right{
    transform: translateX(150px);
}`
const showCode = document.querySelector('.code')
const showCodeStyle = document.querySelector('#codeStyle')
const btns = document.querySelectorAll('button')
let count = 1
const run = () => {
    showCode.innerText = code.substring(0, count)
    showCodeStyle.innerText = code.substring(0, count)
    showCode.scrollTop = showCode.scrollHeight
    count++
}

let showCodeClock = setInterval(() => {
    if (count > code.length) {
        window.clearInterval(showCodeClock)
        return
    }
    run()
}, 0)
window.clearInterval(showCodeClock)
btns[2].onclick = () => {
    window.clearInterval(showCodeClock)
    showCodeClock = setInterval(() => {
        if (count > code.length) {
            window.clearInterval(showCodeClock)
            return
        }
        run()
    }, 0)
}
btns[1].onclick = () => {
    window.clearInterval(showCodeClock)
    showCodeClock = setInterval(() => {
        if (count > code.length) {
            window.clearInterval(showCodeClock)
            return
        }
        run()
    }, 250)
}
btns[0].onclick = () => {
    window.clearInterval(showCodeClock)
    showCodeClock = setInterval(() => {
        if (count > code.length) {
            window.clearInterval(showCodeClock)
            return
        }
        run()
    }, 500)
}
btns[3].onclick = () => {
    window.clearInterval(showCodeClock)
    showCodeClock = setInterval(() => {
        if (count > code.length) {
            window.clearInterval(showCodeClock)
            return
        }
        run()
    }, 0)
}
btns[4].onclick = () => {
    window.clearInterval(showCodeClock)
}
btns[5].onclick = () => {
    window.clearInterval(showCodeClock)
    showCode.innerText = ``
    showCodeStyle.innerText = ``
    count = 1
}


