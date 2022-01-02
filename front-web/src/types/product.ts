import { Category } from './category';

export type Product = {
    id: number;
    name: string;
    price: number;
    date: string;
    description: string;
    imgUrl: string;
    categories: Category[];
}