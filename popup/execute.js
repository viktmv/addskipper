let toggle = document.querySelector('.toggle')

let execute = browser.tabs.executeScript({
  file: "../skip.js"
});

toggle.addEventListener('click', execute)
