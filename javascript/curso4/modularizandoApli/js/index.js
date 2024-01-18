import { calculate } from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { buttonPress, clearButton, typing } from "./keys.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBnt) {
    charKeyBnt.addEventListener("click", buttonPress)
})

document.getElementById("clear").addEventListener("click", clearButton)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById('input').addEventListener("keydown", typing)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)
