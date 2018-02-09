import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    // return this.httpClient.put(
    //   'https://ng-recipe-book-f49b2.firebaseio.com/recipes.json?auth=' + token,
    //   this.recipeService.getRecipe(), {
    //     observe: 'body'
    //   }
    // );
    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-f49b2.firebaseio.com/recipes.json',
      this.recipeService.getRecipe(), {reportProgress: true}
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    // const header = new HttpHeaders().set('Authorization', 'Bearer sdcscsdcsd');

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-f49b2.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>(
      'https://ng-recipe-book-f49b2.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
      .map(
          (recipes) => {
            console.log(recipes);
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.storeRecipes(recipes);
        }
      );
  }
}
