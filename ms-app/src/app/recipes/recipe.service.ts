import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is test',
      'http://maxpixel.freegreatpicture.com/static/photo/640/Melon-Meat-Fruit-Ham-Food-625130.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another test Recipe',
      'This is another test',
      'http://maxpixel.freegreatpicture.com/static/photo/640/Melon-Meat-Fruit-Ham-Food-625130.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  constructor() {}

  getRecipe() {
    console.log(this.recipes);
    return this.recipes.slice();
  }

  storeRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
