import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { createProjectDto } from 'src/dto/createProject.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectEnt } from 'src/etityes/project.entity';
import { createColumnDto } from 'src/dto/createColumn.dto';
import { ColumnEnt } from 'src/etityes/column.entity';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserIdFromToken } from 'src/auth/user.decorator';
import { DeleteProjectColumn } from 'src/dto/deleteProjectColumn.dto';
import { getAllColumnsOfProject } from 'src/dto/get.allColumns.dto';
import { updateProject } from 'src/dto/update.project.dto';
import { updateColumn } from 'src/dto/update.column.dro';
import { moveColumn } from 'src/dto/update.moveColumn.dto';
import { getProjectById } from 'src/dto/get.projectById.dto';

@ApiTags("Работа с проектом")
@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService){}

    @ApiOperation({summary: "Создание проекта"})
    @ApiResponse({status: 200, type: ProjectEnt})
    @UseGuards(JWTAuthGuard)
    @Post("create")
    async createProject(@Body() body: createProjectDto, @UserIdFromToken() userId: number){
        if (!body.description || !body.name){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.createProject(body, userId)
    }

    @ApiOperation({summary: "Поличуть проект по его id в дополненном виде"})
    @ApiResponse({status: 200, type: ProjectEnt})
    @UseGuards(JWTAuthGuard)
    @Post("byId")
    async getProjectById(@Body() body: getProjectById, @UserIdFromToken() userId: number){
        if (!body.id || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.getProjectById(body, userId)
    }

    @ApiOperation({summary: "Получение всех проектов пользователся"})
    @ApiResponse({status: 200, type: [ProjectEnt]})
    @UseGuards(JWTAuthGuard)
    @Get()
    async getProjects(@UserIdFromToken() userId: number){       
        return await this.projectService.getAllProjects(userId)
    }

    @ApiOperation({summary: "Удалить проект"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Delete()
    async deleteProject(@Body() body: DeleteProjectColumn, @UserIdFromToken() userId: number){
        if (!body.id || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.deleteProject(body, userId)
    }

    @ApiOperation({summary: "Изменить проект"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Put()
    async updateProject(@Body() body:updateProject, @UserIdFromToken() userId: number){
        if (!body.description || !body.id || !body.name || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.updateProject(body, userId)
    }


    @ApiOperation({summary: "Создание колонок в проекте"})
    @ApiResponse({status: 200, type: ColumnEnt})
    @UseGuards(JWTAuthGuard)
    @Post("createColumn")
    async createColumn(@Body() body: createColumnDto, @UserIdFromToken() userId: number){
        if (!body.description || !body.name || !body.projectId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.createColumn(body, userId)
    }

    @ApiOperation({summary: "Удалить колонку"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Delete("column")
    async deleteColumn(@Body() body: DeleteProjectColumn,  @UserIdFromToken() userId: number){
        if (!body.id || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.deleteColumn(body, userId)
    }

    @ApiOperation({summary: "Получение всех колонок"})
    @ApiResponse({status: 200, type: [ColumnEnt]})
    @UseGuards(JWTAuthGuard)
    @Post("columns")
    async getAllColumns(@Body() body: getAllColumnsOfProject, @UserIdFromToken() userId: number){
        if (!body.projectId || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.getAllColumn(body, userId)
    }

    @ApiOperation({summary: "Изменить колонку"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Put("column")
    async updateColumn(@Body() body: updateColumn, @UserIdFromToken() userId: number){
        if (!body.description || !body.id || !body.name || !body.ownerId || !body.projectId || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.updateColumn(body, userId)
    }
    
    @ApiOperation({summary: "Переместить колонку"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Put("moveColumn")
    async moveColumn(@Body() body: moveColumn, @UserIdFromToken() userId: number){
        if (!body.id || !body.serialNum || !body.ownerId){
            throw new HttpException("Не полные данные", HttpStatus.BAD_REQUEST)
        }
        return await this.projectService.moveColumn(body, userId)
    }
}
