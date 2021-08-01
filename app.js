let clr = document.getElementById("bod");
let txt = document.querySelector("h1");
let btn = document.getElementById("btn");
var r=0,g=0,b=0;

txt.innerText = `rgb(${r},${g},${b})`;

btn.addEventListener("click",()=>{
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    clr.style.backgroundColor = `rgb(${r},${g},${b})`;
    btn.style.backgroundColor = `rgb(${b},${g},${r})`
    txt.innerText = `rgb(${r},${g},${b})`;
})

