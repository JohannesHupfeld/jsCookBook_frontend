const recipesUrl = "http://localhost:3000/api/v1/recipes"
const nameInput = document.querySelector('#input-name').value 
const ingredientsInput = document.querySelector('#input-ingredients').value
const instructionsInput = document.querySelector('#input-instructions').value 
const urlInput = document.querySelector('#input-url').value
const categoryId = parseInt(document.querySelector('#categories').value) // parseInt turns the string into an integer

document.addEventListener('DOMContentLoaded', () => {
  fetchRecipes() 

  const createRecipeForm = document.querySelector("#create-recipe-form")

  createRecipeForm.addEventListener("submit", (e) => handleRecipeSubmit(e))
})

// get function
function fetchRecipes() {
  fetch(recipesUrl) // returns a promise
  .then(resp => resp.json()) // parses that promise to json
  .then(recipes => {  // returns an array of recipes
    recipes.data.forEach(recipe => { // itterates over the response and show the data in a div
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
          <button data-id="${recipe.id}">Edit</button>
        </div>
      `
      document.querySelector('#recipe-container').innerHTML += renderRecipe
    })
  })
}

function handleRecipeSubmit(e) {
  e.preventDefault()
  const data = {
    name: nameInput().value,
    ingredients: ingredientsInput().value,
    instructions: instructionsInput().value,
    image_url: urlInput().value,
    category: categoryId().value
  }
  postRecipe()
}

function postRecipe() {
  
}