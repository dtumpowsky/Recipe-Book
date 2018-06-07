import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { Ingredient } from '../Models/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(ingredientToEdit: Ingredient) {
    this.clickSender.emit(ingredientToEdit);
  }

  priorityColor(currentIngredient){
    if (currentIngredient.priority === 1){
      return "bg-success";
    } else if (currentIngredient.priority === 2) {
      return  "bg-warning";
    } else if (currentIngredient.priority === 3) {
      return  "bg-danger";
    } else {
      return "bg-light";
    }
  }
}
