class Recipe { // class template for objects
  
  constructor(recipe, recipeAttributes) { // pushes all instance of this into an empty array. Function that creates an instance of an object and sets properties
    this.id = recipe.id // recipe object, top level 
    this.image_url = recipeAttributes.image_url
    this.name = recipeAttributes.name
    this.ingredients = recipeAttributes.ingredients
    this.instructions = recipeAttributes.instructions
    this.category = recipeAttributes.category
    Recipe.all.push(this) // pushes each new instance of this into the empty array below
  } 
  
  renderRecipe = () => { // this is an instance of the recipe class
    return `
    <div data-id=${this.id}> 
    <h2>${this.name}</h2>
    <img src=${this.image_url} height="200" width="250">
    <h3>Ingredients:</h3>
    <p>${this.ingredients}</p>
    <h3>Instructions</h3>
    <p>${this.instructions}</p>
    <h3>Category</h3>
    <p>${this.category.name}</p>
    </div>
    <br></br>
    `
  } // this refers to recipe 

  // INDEX
  static fetchRecipes = () => { // displays recipes
    
    fetch(recipesUrl) // returns a promise
    .then(resp => resp.json()) // parses that promise to json
    .then(recipes => { // returns an array of recipes
      recipes.data.forEach(recipe => { // itterates over the response and show the data in a div
        
        let newRecipe = new Recipe(recipe, recipe.attributes) // recipe.attributes is nested under recipe, a top level object. Correspnds to recipe class constructor
        // create a new instance of my reicpe class
        // document.querySelector('#recipe-container').innerHTML += newRecipe.renderRecipe() //assigning newRecipe.renderRecipe() to innerHTML
            // --> above method clears page makes copy and replaces with new --not ideal especially if event listeners were attached to each recipe
        document.querySelector('#recipe-container').insertAdjacentHTML("beforeend", newRecipe.renderRecipe()) // better way
      })
    })
    .catch(err => alert(err))

  }

} // this is an instance of recipe class, in debugger under prototype we have access to render

Recipe.all = [] // recipe is an object so it can be given an all key and assigned to a blank array
  // pushes all instances of this into an empty array 