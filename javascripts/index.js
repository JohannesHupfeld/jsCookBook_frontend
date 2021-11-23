const recipesUrl = "http://localhost:3000/api/v1/recipes"

document.addEventListener('DOMContentLoaded', () => {
  fetchRecipes()
})

function fetchRecipes() {
  fetch(recipesUrl) //returns a promise
  .then(resp => resp.json()) //parees that promise to json
  .then(recipes => {  // returns an array of recipes
    recipes.data.forEach(recipe => {
      const renderRecipe = `
        <div data-id=${recipe.id}>
          <h2>${recipe.attributes.name}</h2>
          <img src=${recipe.attributes.image_url} height="200" width="250">
          <h3>Ingredients:</h3>
          <p>${recipe.attributes.ingredients}</p>
          <h3>Instructions</h3>
          <p>${recipe.attributes.instructions}</p>
          <h3>Category</h3>
          <p>${recipe.attributes.category.name}</p>
        </div>
      `
      document.querySelector('#recipe_container').innerHTML += renderRecipe
      
    })
  })
}


