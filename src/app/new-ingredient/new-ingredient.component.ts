import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { Ingredient } from '../Models/ingredient.model';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})

export class NewIngredientComponent {
  @Output() sendIngredient = new EventEmitter();

  submitForm(name: string, item: string, description: string) {
    let newIngredient: Recipe = new Recipe(item)
    this.sendIngredient.emit(newIngredient);
  }
}
