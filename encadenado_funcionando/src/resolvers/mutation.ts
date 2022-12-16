import { ObjectId } from "mongo";
import { HumanCollection, RecipesCollection} from "../db/dbconnection.ts";
import { HumanSchema, RecipeSchema } from "../db/schema.ts";
import { Human, Recipes } from "../types.ts";

export const Mutation = {
  createHuman:async(_:unknown,args:{nombre:string}):Promise<HumanSchema>=>{
    try {
      const {nombre}=args;
      const _id=await HumanCollection.insertOne({nombre})
      return {
        _id, nombre
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  //De Human falta obtener las recetas
  ,
  createRecipes:async(_:unknown,args:{nombre:string, author:string}):Promise<RecipeSchema>=>{
    try {
      const {nombre, author}=args;
      const _id=await RecipesCollection.insertOne({nombre, author:new ObjectId(author)});
      return{
        _id,nombre,author:new ObjectId(author) 
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  //De Recipes falta introducir el author
};


