import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('The Yummy Recipe', 'A Sweet item', 'https://reluctantentertainer.com/wp-content/uploads/2019/02/Easy-Homemade-Chili-Recipe-6.jpg'),
    new Recipe('Recipe Delicious', 'A Simple Cuisin', 'https://reluctantentertainer.com/wp-content/uploads/2019/02/Easy-Homemade-Chili-Recipe-6.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
