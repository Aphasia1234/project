import { Injectable } from '@nestjs/common';

export interface Todo {
    id:number;
    title:string;
    completed:boolean; // 是否完成
}

@Injectable()
export class TodosService {
    private todos:Todo[] = [
        {
            id:1,
            title:'学习nestjs',
            completed:false
        },
        {
            id:2,
            title:'学习nestjs 2',
            completed:false
        },
        {
            id:3,
            title:'学习nestjs 3',
            completed:true
        }
    ];

    findAll(){
        return this.todos;
    }

    addTodo(title:string){
        const todo:Todo = {
           id:+Date.now(),
           title,
           completed:false
        }
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id:number){
        this.todos = this.todos.filter(todo => todo.id !== id);
        return {
            message:'删除成功todo',
            code:200
        }
    }
    
}