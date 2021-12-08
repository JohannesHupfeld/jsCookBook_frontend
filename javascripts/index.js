const recipesUrl = "http://localhost:3000/api/v1/recipes" // global 

document.addEventListener('DOMContentLoaded', () => {
  Recipe.fetchRecipes() 
    
  const createRecipeForm = document.querySelector("#create-recipe-form")
  createRecipeForm.addEventListener("submit", (e) => handleRecipeSubmit(e))
})

const handleRecipeSubmit = (e) => { // callback to submit form createRecipeForm. grabs all the values for my inputs
  e.preventDefault()  
  const nameInput = document.querySelector('#input-name').value 
  const ingredientsInput = document.querySelector('#input-ingredients').value
  const instructionsInput = document.querySelector('#input-instructions').value 
  const urlInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#categories').value) // parseInt turns the string into an integer
  postRecipe(nameInput, ingredientsInput, instructionsInput, urlInput, categoryId) //invokes postRecipe and passes through the values
}

// post function
const postRecipe = (name, ingredients, instructions, image_url, category_id) => { // posts recipes 
  // building body object outside of fetch
  const bodyData = {name, ingredients, instructions, image_url, category_id} // since key and value have the same name theres no need to repeat them
  fetch(recipesUrl, { // returns a promise
    method: "POST",
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(bodyData) //converts the object in a JSON string
  })
  .then(resp => resp.json()) // parses that promise into json
  .then(recipe => { // returns an array of json ---recipe is json
    const recipeData = recipe.data // data points to a single object of attributes 
    // render json response       ID             attributes 
    let newRecipe = new Recipe(recipeData, recipeData.attributes) 
    // creates a new instance of my recipe class
    document.querySelector('#recipe-container').insertAdjacentHTML("beforeend", newRecipe.renderRecipe())
  })
  .catch(err => alert(err))
}
