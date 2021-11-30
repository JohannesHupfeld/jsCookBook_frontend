class Recipe { // class recipe is just an object. Syntactic sugar to make it more comfortable for backend developers 

  constructor(recipe, recipeAttributes) { // pushes all instance of this into an empty array
    this.id = recipe.id 
    this.image_url = recipeAttributes.image_url
    this.name = recipeAttributes.name
    this.ingredients = recipeAttributes.ingredients
    this.instructions = recipeAttributes.instructions
    this.category = recipeAttributes.category
    Recipe.all.push(this)
  } 

  renderRecipe() {
    debugger
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
    <button data-id="${this.id}">Edit</button>
    </div>
  `
  }
} // this is an instance of recipe class, in debugger under prototype we have access to render

Recipe.all = [] // recipe is an object so it can be given an all key and assigned to a blank array