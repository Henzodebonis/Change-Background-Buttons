const pink = document.getElementById('pink')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const clean = document.querySelector('.clean')

pink.addEventListener('click', pinkBgr)
blue.addEventListener('click', blueBgr)
red.addEventListener('click', redBgr)
yellow.addEventListener('click', yellowBgr)
green.addEventListener('click', greenBgr)
clean.addEventListener('click', cleanAll)

function pinkBgr() {
    cleanClassesWhenPink();
    pink.parentElement.parentElement.classList.add('pink')
}
function blueBgr() {
    cleanClassesWhenBlue();
    blue.parentElement.parentElement.classList.add('blue')
}
function redBgr() {
    cleanClassesWhenRed();
    red.parentElement.parentElement.classList.add('red')
}
function yellowBgr() {
    cleanClassesWhenYellow();
    yellow.parentElement.parentElement.classList.add('yellow')
}
function greenBgr() {
    cleanClassesWhenGreen();
    green.parentElement.parentElement.classList.add('green')
}

function cleanClassesWhenPink() {
    green.parentElement.parentElement.classList.remove('green')
    yellow.parentElement.parentElement.classList.remove('yellow')
    red.parentElement.parentElement.classList.remove('red')
    blue.parentElement.parentElement.classList.remove('blue')
}
function cleanClassesWhenBlue() {
    green.parentElement.parentElement.classList.remove('green')
    yellow.parentElement.parentElement.classList.remove('yellow')
    red.parentElement.parentElement.classList.remove('red')
    pink.parentElement.parentElement.classList.remove('pink')
}
function cleanClassesWhenRed() {
    green.parentElement.parentElement.classList.remove('green')
    yellow.parentElement.parentElement.classList.remove('yellow')
    pink.parentElement.parentElement.classList.remove('pink')
    blue.parentElement.parentElement.classList.remove('blue')
}
function cleanClassesWhenYellow() {
    green.parentElement.parentElement.classList.remove('green')
    pink.parentElement.parentElement.classList.remove('pink')
    red.parentElement.parentElement.classList.remove('red')
    blue.parentElement.parentElement.classList.remove('blue')
}
function cleanClassesWhenGreen() {
    pink.parentElement.parentElement.classList.remove('pink')
    yellow.parentElement.parentElement.classList.remove('yellow')
    red.parentElement.parentElement.classList.remove('red')
    blue.parentElement.parentElement.classList.remove('blue')
}

function cleanAll() {
    pink.parentElement.parentElement.classList.remove('pink')
    yellow.parentElement.parentElement.classList.remove('yellow')
    red.parentElement.parentElement.classList.remove('red')
    blue.parentElement.parentElement.classList.remove('blue')
    green.parentElement.parentElement.classList.remove('green')
}