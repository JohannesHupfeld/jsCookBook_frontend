const recipesUrl = "http://localhost:3000/api/v1/recipes"

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
  const nameInput = document.querySelector('#input-name').value 
  const ingredientsInput = document.querySelector('#input-ingredients').value
  const instructionsInput = document.querySelector('#input-instructions').value 
  const urlInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#categories').value) // parseInt turns the string into an integer
  postRecipe(nameInput, ingredientsInput, instructionsInput, urlInput, categoryId)
}

function postRecipe(name, ingredients, instructions, image_url, category_id) {
  fetch(recipesUrl, {
    method: "POST",
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify({
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      image_url: image_url,
      category_id: category_id
    })
  })
  .then(resp => resp.json())
  .then(recipe => {
    console.log(recipe);
  })
}