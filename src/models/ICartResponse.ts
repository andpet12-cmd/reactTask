import {ICart} from "./ICart.ts";

export interface ICartResponse {
    total: number;
    skip: number;
    limit: number;
    carts: ICart[];
}