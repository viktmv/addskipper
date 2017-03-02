
console.log('skipper running')
const $ = el => document.querySelector(el)
const skipAdd = () => $('video').currentTime = $('video').duration

let btn = document.createElement('button')
    btn.textContent = 'Skip'
    btn.className = 'addskipper'
    btn.style.cssText =
    'margin: 0 auto;width: 50px;position:fixed;top: 10%;left: 1%;background-color: #fff;z-index: 999999;border-radius: 15px;cursor: pointer'
    btn.addEventListener('click', skipAdd)

document.body.appendChild(btn)
