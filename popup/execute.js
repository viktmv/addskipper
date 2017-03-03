(function() {
    let showbtn = document.querySelector('.showbtn')
    let hidebtn = document.querySelector('.hidebtn')


    showbtn.addEventListener('click', () => browser.tabs.executeScript({file: "../skip.js"}))
    hidebtn.addEventListener('click', () => browser.tabs.executeScript({file: "../cleanup.js"}))
})()
