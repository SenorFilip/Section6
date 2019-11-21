import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';

export class ShoppingListService implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addToShoppingList = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
