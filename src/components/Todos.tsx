import {useEffect, useState} from "react";
import {Todo} from "./Todo.tsx";
import {getAllTodos} from "../services/api.service.ts";
import {ITodo} from "../models/ITodo.ts";

export const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        getAllTodos().then(({todos}) => setTodos(todos))

    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </>
    );
};