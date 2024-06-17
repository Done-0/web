const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", window.scrollY > 130)
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open')
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    menulist.classList.remove('open')
}

var typed = new Typed('.input', {
    strings: ["画出世间的不可觊觎","只有流过血的手指","才能弹出世间的绝唱"],
    typeSpeed: 150,
    backSpeed: 70,
    loop: true
});

function spark(event){
    let ii = document.createElement('ii');
    ii.style.left = (event.pageX) + 'px';
    ii.style.top = (event.pageY) + 'px';
    ii.style.scale = `${Math.random() * 2 + 1}`
    ii.style.setProperty('--x', getRandomTransitionValue())
    ii.style.setProperty('--y', getRandomTransitionValue())

    document.body.appendChild(ii)
    setTimeout(() => {
        document.body.removeChild(ii);
    },2000);
}

function getRandomTransitionValue(){
    return `${Math.random() * 400 - 200}px`
};
document.addEventListener('mousemove', spark);