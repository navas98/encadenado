import { RecipesCollection } from "../db/dbconnection.ts";
import { HumanSchema,RecipeSchema } from "../db/schema.ts";


export const Human={
    id: (parent: HumanSchema): string => parent._id.toString(),
    recipes:async(parent:HumanSchema):Promise<RecipeSchema[]>=>{
        try {
            const recipes=await RecipesCollection.find({
                author:parent._id
            }).toArray()
            return recipes;
        } catch (error) {
            throw new Error(error)
        }
    }
}