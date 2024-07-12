import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { createProjectDto } from 'src/dto/createProject.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectEnt } from 'src/etityes/project.entity';
import { createColumnDto } from 'src/dto/createColumn.dto';
import { ColumnEnt } from 'src/etityes/column.entity';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserIdFromToken } from 'src/auth/user.decorator';
import { DeleteProjectColumn } from 'src/dto/deleteProjectColumn.dto';


@ApiTags("Работа с проектом")
@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService){}

    @ApiOperation({summary: "Создание проекта"})
    @ApiResponse({status: 200, type: ProjectEnt})
    @UseGuards(JWTAuthGuard)
    @Post("create")
    async createProject(@Body() body: createProjectDto, @UserIdFromToken() userId: number){
        return await this.projectService.createProject({...body, ownerId: userId})
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
    async deleteProject(@Body() body: DeleteProjectColumn){
        return await this.projectService.deleteProject(body)
    }

    @ApiOperation({summary: "Изменить проект"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Put()
    async updateProject(@Body() body:createProjectDto){
        return await this.projectService.updateProject(body)
    }


    @ApiOperation({summary: "Создание колонок в проекте"})
    @ApiResponse({status: 200, type: ColumnEnt})
    @UseGuards(JWTAuthGuard)
    @Post("createColumn")
    async createColumn(@Body() body: createColumnDto){
        return await this.projectService.createColumn(body)
    }

    @ApiOperation({summary: "Удалить колонку"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Delete("column")
    async deleteColumn(@Body() body: DeleteProjectColumn){
        return await this.projectService.deleteColumn(body)
    }


    @ApiOperation({summary: "Получение всех колонок"})
    @ApiResponse({status: 200, type: [ColumnEnt]})
    @UseGuards(JWTAuthGuard)
    @Post("columns")
    async getAllColumns(@Body() body){
        return await this.projectService.getAllColumn(body.projectId)
    }

    @ApiOperation({summary: "Изменить колонку"})
    @ApiResponse({status:200})
    @UseGuards(JWTAuthGuard)
    @Put("column")
    async updateColumn(@Body() body: createColumnDto){
        return await this.projectService.updateColumn(body)
    }
    
}
