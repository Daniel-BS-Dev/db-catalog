import { Category } from 'types/category';

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    roles: Category[]
}

