import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param, // 路由参数
    ParseIntPipe // 路由参数管道
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    getTodos() {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body('title') title:string) {
        return this.todosService.addTodo(title);
    }

    @Delete(':id')
    // 路由参数管道 转换为数字类型
    deleteTodo(@Param('id',ParseIntPipe) id:number) {
        return this.todosService.deleteTodo(id);
    }
}
