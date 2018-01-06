import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
        new Ingredient('Bans', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    console.log(this.recipes);
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
