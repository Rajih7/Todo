import { Turret_Road } from "next/font/google"

export const Add_Todo = "Add_Todo"
export const Remove_Todo = "Remove_Todo"
export const Clear_Todo ="Clear_Todo"
export const Toggle_Todo ="Toggle_Todo"


export const addTodo = (data,description) => {
    return {
        type: Add_Todo,
        payload: {
            data: data,
            description: description,
            id: new Date().getTime().toString(),
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: Remove_Todo,
        id
    }
}
export const clearTodo = () => {
    return {
        type: Clear_Todo
    }
}
export const toggleTodo = (id) => {
    return {
        type: Toggle_Todo,
        id
    }
}