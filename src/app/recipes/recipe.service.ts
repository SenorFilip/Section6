import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg'),
    new Recipe(
      'A Test Recipe1',
      'This is simply a test1',
      'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
