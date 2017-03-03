console.log('cleanup running')

let btn = document.querySelector('.addskipper')
if (btn) return btn.parentNode.removeChild(btn)
