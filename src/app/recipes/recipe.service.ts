import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'assets/garlic-rosem.png',[
            new Ingredient('Pasta',1),
            new Ingredient('French',20)
        ]),
        new Recipe('A Cake Recipe', 'This is butterscotch cake', 'assets/cake.jpg',[
            new Ingredient('butterscotch',2),
            new Ingredient('Milk',2)
        ]),
        new Recipe('A salad Recipe', 'This is a healthy salad recipe', 'assets/salad.jpg',[
            new Ingredient('Veges',10),
            new Ingredient('Sprouts',3)
        ])
      ];

      constructor(private slService: ShoppingListService) { }

      getRecipes() {
          return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}