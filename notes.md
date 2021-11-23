index. js

// function recipeForm() {
//   fetch(recipesUrl) //returns a promise
//   .then(resp => resp.json()) //parees that promise to json
//   .then(recipes => {   // returns an array of recipes
//     recipes.data.forEach(recipe => {
//       const recipeForm = `
//         <form id="recipe-form">
//           <h3>Add a New Recipe:</h3>
//             <label for="recipe-name">Name:</label>
//             <input type="text" name="name" id="recipe-name"><br><br>
//             <label for="recipe-ingredients">Ingredients:</label>
//             <textarea name="ingredients" id="recipe-ingredients" cols="30" rows="5"></textarea><br><br>
//             <label for="recipe-instructions">Instructions:</label>
//             <textarea name="instructions" id="recipe-instructions" cols="30" rows="5"></textarea><br><br>
//             <label for="image_url">Image Link</label>
//             <input type="url" name="image link" id="image_url"><br><br>
//             <label for="recipe-category">Category:</label>
//             <select id="category_id"></select>
//             <input type="submit" value="Create">
//         </form>
//       `
//     })
//   })
//   .catch(err => alert(err))
// }

// function fetchCatergories() {
//   fetch(`${baseUrl}/api/v1/categories`) //returns a promise
//   .then(resp => resp.json()) //parees that promise to json
//   .then(categories => {   // returns an array of recipes
//     console.log(categories);
//   })
//   .catch(err => alert(err))
// }

index.html

  <div id="categories-section" class="section"></div>
            <div id="new-form-section" class="section">
              <form id="recipe-form">
                <h3>Add a New Recipe:</h3>
                <label for="recipe-name">Name:</label>
                <input type="text" name="name" id="recipe-name"><br><br>
                <label for="recipe-ingredients">Ingredients:</label>
                <textarea name="ingredients" id="recipe-ingredients" cols="30" rows="5"></textarea><br><br>
                <label for="recipe-instructions">Instructions:</label>
                <textarea name="instructions" id="recipe-instructions" cols="30" rows="5"></textarea><br><br>
                <label for="image_url">Image Link</label>
                <input type="url" name="image link" id="image_url"><br><br>
                <label for="recipe-category">Category:</label>
                <select id="category_id"></select>
                <input type="submit" value="Create">
              </form>
            </div>