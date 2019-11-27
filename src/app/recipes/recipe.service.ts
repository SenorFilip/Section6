import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Indian curry',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2019/05/01/15/04/indian-4171081_960_720.jpg',
      [
        new Ingredient('salama', 2),
        new Ingredient('zelje', 7)
      ]
    ),
    new Recipe(
      'Italian pasta',
      'This is simply a test1',
      'https://live.staticflickr.com/65535/48674795547_eec9247b7b_b.jpg',
      [
        new Ingredient('pasta', 2),
        new Ingredient('grounded meat', 7)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    // ingredients.forEach(
    //   (ingredient: Ingredient) => {
    //     this.shoppingListService.addIngredient(ingredient);
    //   }
    // );
  }

}
