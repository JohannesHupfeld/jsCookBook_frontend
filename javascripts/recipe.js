class Recipe { // class recipe is just an object. Syntactic sugar to make it more comfortable for backend developers 

  constructor(recipe, recipeAttributes) { // pushes all instance of this into an empty array
    this.id = recipe.id 
    this.image_url = recipeAttributes.image_url
    this.name = recipeAttributes.name
    this.ingredients = recipeAttributes.ingredients
    this.instructions = recipeAttributes.instructions
    this.category_id = recipeAttributes.category_id  
    Recipe.all.push(this)
  }

  
}

Recipe.all = [] // recipe is an object so it can be given an all key and assigned to a blank array