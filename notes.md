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





const deleteRecipe = document.querySelector(`button.delete-button[data-id='${recipe.id}']`)
deleteRecipe.addEventListener("delete", (e) => handleDelete(e))

function handleDelete(e) {
  debugger
    fetch(recipesUrl, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => { debugger
        e.target.parentNode.remove()
        alert(json.message)
    })
}

  <button data-id="${this.id}">Delete</button>  -----> in render 



const deleteBttn = document.createElement("button");

deleteBttn.className = "delete-bttn";
		deleteBttn.textContent = "Delete";
		deleteBttn.addEventListener("click", () => deleteRecipe(recipe));

function deleteRecipe(recipe) {
debugger
  const configObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  fetch(`http://localhost:3000/api/v1/recipes/${recipe.id}`, configObj)
  .then(resp => resp.json())
  .catch(error => console.error('ERROR:', error))
  // ❗ should return an empty JS object (if deleted successfully)
  .then(deletedRecipe => { 
    console.log(deletedRecipe);
    
    // make DOM changes only after successful deletion
    recipe.remove();
  });
}




const buttonShow = () => document.getElementById("button-show")
const recipeContainer = () => document.getElementById("recipe-container")


DOMContentLoaded
    buttonShow().addEventListener("click", handleClick)


const handleClick = () => {
  if (recipeContainer().children.length < 1) {
    Recipe.fetchRecipes()
  } else {
    recipeContainer().innerHTML = ""
  }
}









<button data-id="${this.id}">Delete</button>