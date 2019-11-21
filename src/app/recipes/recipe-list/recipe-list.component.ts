import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeItemDetailsEvent = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onClick() {
    console.log('jbg');
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeItemDetailsEvent.emit(recipe);
  // }

  // showRecipeDetailsOnClick(index: number) {
  //   // console.log(this.recipes[index]);
  //   this.recipeItemDetailsEvent.emit(this.recipes[index]);
  // }

}
