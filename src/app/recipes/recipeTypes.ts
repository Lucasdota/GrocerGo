import { StaticImageData } from "next/image";

export interface Recipe {
  id: number;
  title: string;
  image: StaticImageData;
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
      ingredients: {
        id: number;
        name: string;
        localizedName: string;
        image: StaticImageData;
      }[];
    }[];
  }[];
  extendedIngredients: {
    original: string;
  }[];
}
