import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { Ingredient } from '../Models/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  @Input() childSelectedIngredient: Ingredient; //can also be Recipe
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
