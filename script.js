//colors
const shuffle = document.querySelector('.button')
const body = document.querySelector('html')
const colors = ['#FAE751', '#D84C46', '#87D9DF', '#D570BF', '#77C1A8', '#F6CA5A', '#AE36E7', '#f8961E', '#2541b2', '#d2ff28', '#ff7900', '#c879ff', '#fe5a5a', '#79fe5a']

// COLOR inspired by https://github.com/JS-Beginners/project_change_color_background/blob/master/js/script.js
body.style.backgroundColor = 'violet'
shuffle.addEventListener('click', changeBackground)
function changeBackground(){
  const colorIndex= parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex]
  }

