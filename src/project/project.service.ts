import { Inject, Injectable } from '@nestjs/common';
import { createColumnDto } from 'src/dto/createColumn.dto';
import { createProjectDto } from 'src/dto/createProject.dto';
import { DeleteProjectColumn } from 'src/dto/deleteProjectColumn.dto';
import { ColumnEnt } from 'src/etityes/column.entity';
import { ProjectEnt } from 'src/etityes/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

    constructor(
        @Inject('projectRepository')
        private projectRepository: Repository<ProjectEnt>,
        @Inject('columnRepository')
        private columnRepository: Repository<ColumnEnt>,
    ) {}

    
    async createProject(dto: createProjectDto){
        const project = await this.projectRepository.create(dto)
        return this.projectRepository.save(project)
    }

    async getAllProjects(id:number){
        return await this.projectRepository.find({where: {ownerId:id}})
    }

    async deleteProject(dto: DeleteProjectColumn) {
        return await this.projectRepository.delete(dto.id)
    }

    async updateProject(data){

    }

    async deleteColumn(dto: DeleteProjectColumn) {
        const column = await this.columnRepository.delete(dto.id)
        return column
    }

    async createColumn(dto:createColumnDto){
        const column = await this.columnRepository.create(dto)
        return await this.columnRepository.save(column)
    }

    async getAllColumn(id:number){
        return await this.columnRepository.find({where: {projectId:id}})
    }

    async updateColumn(data){

    }
}
