document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/recipes')
  .then(resp => resp.json())
  .then(recipes => {
    console.log(recipes)
  })
})