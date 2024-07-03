import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectEnt } from 'src/etityes/project.entity';

@ApiTags("Работа с задчами")
@Controller('todo')
export class TodoController {

    constructor(private taskService: TodoService){}

    @ApiOperation({summary: "Получение всех здачи проекта"})
    @ApiResponse({status: 200, type: ProjectEnt})
    @Get()
    async getAllTasksOfProject(){}

    @ApiOperation({summary: "Создание задачи"})
    @ApiResponse({status: 200, type: [ProjectEnt]})
    @Post()
    async createTask(@Body()body){

    }

}
