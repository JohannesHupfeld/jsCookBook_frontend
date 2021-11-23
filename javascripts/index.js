const baseUrl = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
  fetchRecipes()
  // fetchCatergories()
})

function fetchRecipes() {
  fetch(`${baseUrl}/api/v1/recipes`) //returns a promise
  .then(resp => resp.json()) //parees that promise to json
  .then(recipes => {   // returns an array of recipes
    recipes.data.forEach(recipe => {
      const recipeForm = `
        <form id="recipe-form">
          <h3>Add a New Recipe:</h3>
          <label for="recipe-name">Name:</label>
          <input type="text" name="name" id="recipe-name"><br><br>
          <label for="recipe-ingredients">Ingredients:</label>
          <input type="text" name="ingredients" id="recipe-ingredients"><br><br>
          <label for="recipe-instructions">Instructions:</label>
          <input type="text" name="instructions" id="recipe-instructions"
          <label for"recipe-category">Category:</label>
          <select id="category_id">
          </select>
          <input type="submit" value="Create">
        </form>
      `
    })
  })
  .catch(err => alert(err))
}

// function fetchCatergories() {
//   fetch(`${baseUrl}/api/v1/categories`) //returns a promise
//   .then(resp => resp.json()) //parees that promise to json
//   .then(categories => {   // returns an array of recipes
//     console.log(categories);
//   })
//   .catch(err => alert(err))
// }
