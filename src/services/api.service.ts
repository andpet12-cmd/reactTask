import {ITodosResponse} from "../models/ITodosResponse.ts";

const url = import.meta.env.VITE_API_URL;

const getAllTodos = async (): Promise<ITodosResponse> => {

    return await fetch(url + '/todos')
        .then(value => value.json());
}

export {
    getAllTodos
}