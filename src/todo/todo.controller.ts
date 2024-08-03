import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createTask } from 'src/dto/createTask.dto';
import { TaskEnt } from 'src/etityes/todo.entity';
import { updateTask } from 'src/dto/update.task.dto';
import { deleteTask } from 'src/dto/delele.task.dto';
import { getAllTasksOfProject } from 'src/dto/get.allTaskOfProject.dto';
import { updateColumnInTask } from 'src/dto/update.columnInTask.dto';
import { UserIdFromToken } from 'src/auth/user.decorator';
import { moveTask } from 'src/dto/update.moveTask.dto';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags("Работа с задчами")
@Controller('todo')
export class TodoController {
    constructor(private taskService: TodoService){}

    @ApiOperation({summary: "Получение всех задач проекта"})
    @ApiResponse({status: 200, type: [TaskEnt]})
    @UseGuards(JWTAuthGuard)
    @Post("all")
    async getAllTasksOfProject(@Body() body: getAllTasksOfProject, @UserIdFromToken() userId: number){
        if (!body.projectId || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.taskService.getAllTasksOfProject(body, userId)
    }

    @ApiOperation({summary: "Создание задачи"})
    @ApiResponse({status: 200, type: TaskEnt})
    @UseGuards(JWTAuthGuard)
    @Post()
    async createTask(@Body() body: createTask, @UserIdFromToken() userId: number){
        if (body.columnId  || body.name && body.ownerId || body.serialNum || body.projectId){
            return await this.taskService.creteTask(body, userId)
        } else {
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
    }

    @ApiOperation({summary: "Изменение задачи"})
    @ApiResponse({status: 200, type: TaskEnt})
    @UseGuards(JWTAuthGuard)
    @Put()
    async updateTask(@Body() body: updateTask, @UserIdFromToken() userId: number){
        if (!body.name  || !body.description || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.taskService.updateTask(body, userId)
    }

    @ApiOperation({summary: "Удалить задачу"})
    @ApiResponse({status: 200, type: TaskEnt})
    @UseGuards(JWTAuthGuard)
    @Delete()
    async deleteTask(@Body() body: deleteTask, @UserIdFromToken() userId: number){
        if (!body.id || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.taskService.deleteTask(body, userId)
    }

    @ApiOperation({summary: "Переместить задачу в другую колонку"})
    @ApiResponse({status: 200, type: TaskEnt})
    @UseGuards(JWTAuthGuard)
    @Put("move")
    async moveTaskToColumn(@Body() body: updateColumnInTask, @UserIdFromToken() userId: number){
        if (!body.columnId || !body.id || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.taskService.moveTaskToColumn(body, userId)
    }

    @ApiOperation({summary: "Переместить задачу"})
    @ApiResponse({status: 200, type: TaskEnt})
    @UseGuards(JWTAuthGuard)
    @Put("moveTask")
    async moveTask(@Body() body: moveTask, @UserIdFromToken() userId: number){
        if (!body.id || !body.serialNum || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.taskService.moveTaskInColumn(body, userId)
    }
}
