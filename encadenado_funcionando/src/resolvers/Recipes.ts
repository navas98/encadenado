import { HumanCollection } from "../db/dbconnection.ts";
import { HumanSchema,RecipeSchema } from "../db/schema.ts";


export const Recipes={
    id: (parent: RecipeSchema): string => parent._id.toString(),
    author:async(parent:RecipeSchema):Promise<HumanSchema|undefined>=>{
        try {
            const author=await HumanCollection.findOne({
                _id:parent.author
            })
            return author
        } catch (error) {
            throw new Error(error)
        }
    }
}