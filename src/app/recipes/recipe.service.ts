import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    // recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
        // ingredients.forEach(
        //   (ingredient: Ingredient) => {
        //     this.shoppingListService.addIngredient(ingredient);
        //   }
        // );
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
