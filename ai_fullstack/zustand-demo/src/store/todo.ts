import { create } from 'zustand'
import type { Todo } from '../types';
import { persist } from 'zustand/middleware';//持久化中间件

export interface TodoState {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}
// 高阶函数
export const useTodoStore = create<TodoState>()(    
    persist(
     (set, get) => ({
    todos:[],
    addTodo:(text:string)=>
        set((state)=>({
            todos:[...state.todos,{
                id:+Date.now(),
                text,
                completed:false
            }]
        })),
    toggleTodo:(id:number)=>
        set((state)=>({
            todos:state.todos.map((todo)=>
            todo.id === id ? 
        {...todo,completed:!todo.completed}
    :todo
)
        })),
    removeTodo:(id:number)=>
        set((state)=>({
            todos:state.todos.filter((todo)=>todo.id !== id)
        })),
}),{
    name:'todos',
}
))