function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
document.querySelector("#hamburger").addEventListener("click", function(){
    if (document.querySelector('nav').classList.contains('activenav')){
        document.querySelector('nav .first').classList.remove('first2');
        document.querySelector('nav .second').classList.remove('second2');
        document.querySelector('nav .third').classList.remove('third2');
        document.querySelector('nav').classList.remove('activenav');
        document.querySelector('nav').classList.add('nonactivenav');
        document.querySelector('.nonactivenav ul').style.opacity = "0";
        document.querySelector('.nonactivenav #lang').style.opacity = "0";
        if (document.querySelector('nav').classList.contains('activenavmobile')){
            document.querySelector('nav').classList.remove('activenavmobile')
        }
    }
    else {
        document.querySelector('nav .first').classList.add('first2');
        document.querySelector('nav .second').classList.add('second2');
        document.querySelector('nav .third').classList.add('third2');
        document.querySelector('nav').classList.add('activenav');
        document.querySelector('nav').classList.remove('nonactivenav');
        document.querySelector('.activenav ul').style.transition = "all .3s";
        document.querySelector('.activenav #lang').style.transition = "all .6s";
        window.setTimeout(function(){
            document.querySelector('.activenav ul').style.opacity = "1";
            document.querySelector('.activenav #lang').style.opacity = "1";
        },800);
        if (width < 1024){
            document.querySelector('nav').classList.add('activenavmobile');
        }
    }
});
let skills = document.querySelectorAll('.skill');
for (let i=0; i<skills.length; i++){
    skills[i].style.borderColor = "rgb(0,"+Math.round(25+230/skills.length*i)+","+Math.round(12+116/skills.length*i)+")";
}
function smoothScroll(target,duration){
    let distance = target.getBoundingClientRect().top;
    let startPos = window.pageYOffset;
    let startTime = null;
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed,startPos,distance,duration)
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    } 
    function ease(t,b,c,d){
        t /= d / 2;
        if(t<1) return c/2*t*t+b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }
    requestAnimationFrame(animation);
}
document.querySelector('.navi .buttonin:nth-child(5) li').addEventListener('click', function(){
    smoothScroll(document.querySelector('header'), 1000);
});
document.querySelector('.navi .buttonin:nth-child(4) li').addEventListener('click', function(){
    smoothScroll(document.querySelector('#about'), 1000);
});
document.querySelector('.navi .buttonin:nth-child(3) li').addEventListener('click', function(){
    smoothScroll(document.querySelector('#skills'), 1000);
});
document.querySelector('.navi .buttonin:nth-child(2) li').addEventListener('click', function(){
    smoothScroll(document.querySelector('#projects'), 1000);
});
document.querySelector('.navi .buttonin:nth-child(1) li').addEventListener('click', function(){
    smoothScroll(document.querySelector('footer'), 1000);
});
document.getElementById('scrollup').addEventListener('click', function(){
    smoothScroll(document.querySelector('header'), 1000);
});
let isMobile = detectMob();
const c = document.getElementById("can");
let cursorX = -1000;
let cursorY = -1000;
if (!(isMobile)){
    document.body.addEventListener("mousemove", e => { // ustawia zmienne kursorowe
        cursorX = e.clientX;
        cursorY = e.clientY;
    });
    document.body.addEventListener("mouseout", e => { // wyrzuca zmienne kursorowe na takie co nie przeszkadzają
        cursorX = -1000;
        cursorY = -1000;
    });
}
let width;
let height;
if (!(isMobile)){
    width = window.innerWidth;
    height = window.innerHeight;
}
else {
    let body = document.body,html = document.documentElement;
    height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
    c.style.width = width;
    c.style.height = height;
    c.style.position = "absolute";
}
const windowFill = () => { // wypełnia canvas piłkami
    balls.forEach(cell => {
        ctx.beginPath();
        ctx.fillStyle = cell[3];
        ctx.arc(cell[0], cell[1], cell[2],0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    });
}
const ctx = c.getContext("2d");
if (!(isMobile)){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
else {
    ctx.canvas.width = width;
    ctx.canvas.height = height;
}
const balls = [];
for(i=0; i<100; i++){ //tworzy piłki
    if(isMobile && i == 40) break;
    balls.push([Math.ceil(Math.random()*width), Math.ceil(Math.random()*height), Math.ceil(Math.random()*80), "rgba(0,"+(Math.ceil(Math.random()*153)+102)+","+(Math.ceil(Math.random()*153)+102)+",0.3)", (Math.random()*2-1),(Math.random()*2-1)]);
}
window.addEventListener("resize", function(){ // w razie zmiany rozmiaru okna
    if(width < 1024 && window.innerWidth >=1024){
        if(document.querySelector('nav').classList.contains('activenavmobile')){
            document.querySelector('nav').classList.remove('activenavmobile');
        }
    }
    if(width >= 1024 && window.innerWidth < 1024){
        if(document.querySelector('nav').classList.contains('activenav') && !(document.querySelector('nav').classList.contains('activenavmobile'))){
            document.querySelector('nav').classList.add('activenavmobile');
        }
    }
    if (!(isMobile)){
        width = window.innerWidth;
        height = window.innerHeight;
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        balls.forEach(cell => {
            if (cell[0] > window.innerWidth){
                cell[0] = window.innerWidth % cell[0];
            }
            if (cell[1] > window.innerHeight){
                cell[1] = window.innerHeight % cell[1];
            }
        });
        windowFill();
    }
    else {
        let body = document.body,html = document.documentElement;
        width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
        height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    }
});
function movement(){ // rusza piłki
    balls.forEach(cell => {
        cell[0] = cell[0] + cell[4];
        cell[1] = cell[1] + cell[5];
        if (cell[0]-cell[2] > width){
            cell[0] = 0-cell[2];
        }
        else if (cell[0]+cell[2] < 0){
            cell[0] = width+cell[2];
        }
        if (cell[1]-cell[2] > height){
            cell[1] = 0-cell[2];
        }
        else if(cell[1]+cell[2] < 0){
            cell[1] = height+cell[2];
        }
        if(Math.sqrt(Math.pow(Math.abs(cursorX-cell[0]),2) + Math.pow(Math.abs(cursorY-cell[1]),2)) < 130+cell[2]){
            let sum = Math.abs(cursorX-cell[0])+Math.abs(cursorY-cell[1]);
            let speedSum = Math.abs(cell[4])+Math.abs(cell[5]);
            let markx = cursorX-cell[0] > 0 ? 1 : -1;
            let marky = cursorY-cell[1] > 0 ? 1 : -1;
            cell[4] = markx*speedSum*(Math.abs(cursorX-cell[0])/sum);
            cell[5] = marky*speedSum*(Math.abs(cursorY-cell[1])/sum);
        }
    });
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,width, height);
    windowFill();
}
windowFill();
if(!(isMobile)) {
    const it = setInterval(movement, 3);
}
else{ 
    const it = setInterval(movement, 30);
}