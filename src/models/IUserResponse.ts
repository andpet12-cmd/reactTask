import {IUser} from "./IUser.ts";

export interface IUserResponse {
    total: number;
    skip: number;
    limit: number;
    users: IUser[];
}