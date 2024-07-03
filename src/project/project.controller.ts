import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { createProjectDto } from 'src/dto/createProject.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectEnt } from 'src/etityes/project.entity';

@ApiTags("Работа с проектом")
@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService){}

    @ApiOperation({summary: "Создание проекта"})
    @ApiResponse({status: 200, type: ProjectEnt})
    @Post()
    async createProject(@Body() body: createProjectDto){
        return await this.projectService.createProject(body)
    }

    @ApiOperation({summary: "Получение всех проектов пользователся"})
    @ApiResponse({status: 200, type: [ProjectEnt]})
    @Get()
    async getProjects(){
        return await this.projectService.getAllProjects(1)
    }


    deleteProject(){}
    updateProject(){}

    async createColumn(){}
    async deleteColumn(){}
    async updateColumn(){}
    async getAllColumnOfProject(){}
}
