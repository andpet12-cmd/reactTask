import {ITodo} from "./ITodo.ts";

export interface rootType {
    todos: ITodo[];
    total: number;
    skip: number;
    limit: number;
}

export interface ITodosResponse {

}