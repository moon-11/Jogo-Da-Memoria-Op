// models/cardModels.ts
export interface CardType {
  id: number | string;
  name: string;
  image: string;
  matched: boolean;
  backImage: string;
  frontImage: string;
}
