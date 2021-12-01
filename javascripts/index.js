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
  .then(recipes => { // returns an array of recipes
    recipes.data.forEach(recipe => { // itterates over the response and show the data in a div
      
      let newRecipe = new Recipe(recipe, recipe.attributes) // recipe.attributes is nested under recipe, a top level object. Correspnds to recipe class constructor
      
      document.querySelector('#recipe-container').innerHTML += newRecipe.renderRecipe()
      
    })
  })
  .catch(err => alert(err))
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
  const bodyData = {name, ingredients, instructions, image_url, category_id}
  fetch(recipesUrl, {
    method: "POST",
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(bodyData)
  })
  .then(resp => resp.json())
  .then(recipe => {
    const recipeData = recipe.data 
    // render json response
    let newRecipe = new Recipe(recipeData, recipeData.attributes) 
      
    document.querySelector('#recipe-container').innerHTML += newRecipe.renderRecipe()
  })
  .catch(err => alert(err))
}
