const baseUrl = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
  fetch(`${baseUrl}/api/v1/recipes`) //returns a promise
  .then(resp => resp.json()) //pareses that to json
  .then(recipes => {   // returns an array of recipes
    console.log(recipes);
  })
  .catch(err => alert(err))
})
