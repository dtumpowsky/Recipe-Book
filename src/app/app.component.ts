import { Component } from '@angular/core';
import { Recipe } from './Models/recipe.model';
import { Ingredient } from './Models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';
  currentFocus: string = 'International Cuisines';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

//backround color depending on selection of ingredient
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

//Hard coded recipe object
  recipes: Recipe[] = [
    new Recipe(
      'Picadillo',
      //Ingredient object within recipe object
      [
        new Ingredient ('1 pound of ground turkey (I used turkey sausage @ .99 a package!)'),
        new Ingredient('1/4 cup fresh lemon juice (I used reconstituted lemon juice)'),
        new Ingredient('3 T white wine: 1 cup finely chopped yellow onion'),
        new Ingredient('1 small green bell pepper), new Ingredient(finely chopped'),
        new Ingredient('3 garlic cloves), new Ingredient(minced'),
        new Ingredient('2 T olive oil'),
        new Ingredient('1 (8 oz.) can tomato sauce'),
        new Ingredient('1/2 cup loosely packed raisins'),
        new Ingredient('1/2 cup drained pimento-stuffed green olives'),
        new Ingredient('1 T capers'),
        new Ingredient('1 T Worcestershire sauce'),
        new Ingredient('Freshly ground pepper to taste')
      ],
      'Combine the turkey, lemon juice and wine in a bowl and mix well. Marinate, covered with plastic wrap, in the refrigerator for 1 hour. Saute the onion, bell pepper and garlic in the olive oil in a skiller for 3 minutes. Add the turkey mixture and mix well. Cook for 5 minutes over medium hear, stirring constantly. Stir in the tomato sauce, raisins, olives, capers, Worcestershire sauce and pepper; reduce heat. Simmer, covered for 25 minutes stirring occasionally. Spoon the picadillo over hot cooked rice on dinner plates. You may also use as a stuffing for eggplant, mirlitons or bell peppers.'
    ),
    new Recipe(
      'Duck Confit',
      [
        new Ingredient ('3 tablespoons salt'),
        new Ingredient('4 cloves garlic, smashed'),
        new Ingredient('1 shallot, peeled and sliced'),
        new Ingredient('6 sprigs thyme'),
        new Ingredient('Coarsely ground black pepper'),
        new Ingredient('4 duck legs with thighs'),
        new Ingredient('4 duck wings, trimmed'),
        new Ingredient('About 4 cups duck fat'),
      ],
      'Sprinkle 1 tablespoon of salt in the bottom of a dish or plastic container large enough to hold the duck pieces in a single layer. Evenly scatter half the garlic, shallots, and thyme in the container. Arrange the duck, skin-side up, over the salt mixture, then sprinkle with the remaining salt, garlic, shallots, and thyme and a little pepper. Cover and refrigerate for 1-2 days. Preheat the oven to 225°F. Melt the duck fat in a small saucepan. Brush the salt and seasonings off the duck. Arrange the duck pieces in a single snug layer in a high-sided baking dish or ovenproof saucepan. Pour the melted fat over the duck (the duck pieces should be covered by fat) and place the confit in the oven. Cook the confit slowly at a very slow simmer — just an occasional bubble — until the duck is tender and can be easily pulled from the bone, 2-3 hours. Remove the confit from the oven. Cool and store the duck in the fat. (The confit will keep in the refrigerator for several weeks'
    )
  ];

  selectedIngredient=null;

  editIngredient(clickedIngredient) {
    this.selectedIngredient = clickedIngredient;
  }

  finishedEditing() {
    this.selectedIngredient = null;
  }

}
