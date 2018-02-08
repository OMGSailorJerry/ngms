import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesStartComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipesDetailComponent,
    RecipesItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule {}
