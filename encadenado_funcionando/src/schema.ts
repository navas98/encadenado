import { gql } from "graphql_tag";

export const typeDefs = gql`
 
 
  type Human{
    id:ID!
    nombre:String!
    recipes:[Recipes!]!
  }
  type Recipes{
    id:ID!
    nombre:String!
    author:Human!
  }
  type Query {
   getHuman(id:ID!):Human
   getRecipes(id:ID!):Recipes
  }

  type Mutation {
  createHuman(nombre:String!):Human!
  createRecipes(nombre:String!,author:ID!):Recipes!
}
`;
