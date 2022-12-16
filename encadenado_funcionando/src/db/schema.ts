import { Human,Recipes } from "../types.ts";
import { ObjectId } from "mongo";


export type HumanSchema=Omit<Human,"id"|"recipes">&{
  _id:ObjectId
};
export type RecipeSchema=Omit<Recipes,"id"|"author">&{
  _id:ObjectId
  author:ObjectId
}

