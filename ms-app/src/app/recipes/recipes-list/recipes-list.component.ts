import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is test',
      'http://maxpixel.freegreatpicture.com/static/photo/640/Melon-Meat-Fruit-Ham-Food-625130.jpg'),
    new Recipe(
      'Another test Recipe',
      'This is another test',
      'http://maxpixel.freegreatpicture.com/static/photo/640/Melon-Meat-Fruit-Ham-Food-625130.jpg')
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
