import { HumanCollection,RecipesCollection } from "../db/dbconnection.ts";
import { ObjectId } from "mongo";
import { Human,Recipes } from "../types.ts";
import { HumanSchema, RecipeSchema } from "../db/schema.ts";

export const Query = {
 
      getHuman:async(_:unknown,args:{id:string}):Promise<HumanSchema>=>{
        try {
            const Human=await HumanCollection.findOne({
                _id:new ObjectId(args.id)
            })
            if(!Human)throw new Error("Human not found");
            return Human
        } catch (error) {
            throw new Error(error);
        }
      },
      getRecipes:async(_:unknown,args:{id:string}):Promise<RecipeSchema>=>{
        try {
            const recipes=await RecipesCollection.findOne({
                _id:new ObjectId(args.id)
            });
            if(!recipes)throw new Error("Recipes not found");
            return recipes
        } catch (error) {
            throw new Error(error);
        }
      }
};
