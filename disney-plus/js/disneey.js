'use strict'


const button1 = document.querySelector(".ask1")
button1.addEventListener("click",toggletext1)
const button2 = document.querySelector(".ask2")
button2.addEventListener("click",toggletext2)
const button3 = document.querySelector(".ask3")
button3.addEventListener("click",toggletext3)
const button4 = document.querySelector(".ask4")
button4.addEventListener("click",toggletext4)
const button5 = document.querySelector(".ask5")
button5.addEventListener("click",toggletext5)

function toggletext1(){
    button1.classList.toggle("active")
}

function toggletext2(){
    button2.classList.toggle("active")
}

function toggletext3(){
    button3.classList.toggle("active")
}

function toggletext4(){
    button4.classList.toggle("active")
}

function toggletext5(){
    button5.classList.toggle("active")
}




