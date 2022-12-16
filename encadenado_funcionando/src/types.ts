export type Human={
  id:string
  nombre:String
  recipes:Recipes[]
}
export type Recipes={
  id:string
  nombre:string
  author:Human
}