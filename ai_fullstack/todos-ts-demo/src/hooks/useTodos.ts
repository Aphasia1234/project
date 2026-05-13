import {
    useState,
    useEffect
} from 'react';
// 引入 Todo 接口 
import type { Todo } from '../types/todo';
import { getStorage, setStorage } from '../utils/storages';

const STORAGE_KEY = 'todos';// 便于维护

export function useTodos() {
    // ()=>getStorage<Todo[]>(STORAGE_KEY,[])
    // 懒初始化函数，只会在初始化时执行一次
    // 当需要重新渲染时，react会判断是否是首次渲染，
    // 如果是首次渲染，会执行懒初始化函数，
    // 如果不是首次渲染，会直接使用上一次渲染的状态值
    // useState() 里的参数相当于初始值
    const [todos, setTodos] = useState<Todo[]>(()=>getStorage<Todo[]>(STORAGE_KEY,[]));

    useEffect(()=>{
        setStorage<Todo[]>(STORAGE_KEY,todos);
    },[todos]);

    const addTodo = (title:string)=>{
        const newTodo:Todo = {
            id:+new Date(),
            title,
            completed:false
        }
        const newTodos = [...todos,newTodo];
        setTodos(newTodos);
    }

    const toggleTodo = (id:number)=>{
        const newTodos = todos.map(todo =>
          todo.id === id ? 
          { ...todo,completed:!todo.completed }
          : todo
        );
        setTodos(newTodos);
    }

    const removeTodo = (id:number)=>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }
}
