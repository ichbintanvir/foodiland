import { recipes } from "../data/recipes";

const allRecipies = recipes;

export function AllRecipies(){
    return allRecipies;
}

export function SliceRecipies(from=0,to){
    const sliceRecipiesData = allRecipies.slice(from,to)
    return sliceRecipiesData
}