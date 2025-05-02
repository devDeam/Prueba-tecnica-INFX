export interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  imageUrl: string;
  rating: number[];
}

export interface ItemPayload {
  brand: string;
  name: string;
  stock: number;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating?: number[];
}

export interface ItemCardProps {
  item: Item;
  averageRating: number;
}