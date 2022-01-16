import { Role } from 'types/category';

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: Role[]
}

