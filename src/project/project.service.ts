import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { createColumnDto } from 'src/dto/createColumn.dto';
import { createProjectDto } from 'src/dto/createProject.dto';
import { DeleteProject } from 'src/dto/deleteProject.dto ';
import { DeleteProjectColumn } from 'src/dto/deleteProjectColumn.dto';
import { getAllColumnsOfProject } from 'src/dto/get.allColumns.dto';
import { getProjectById } from 'src/dto/get.projectById.dto';
import { updateColumn } from 'src/dto/update.column.dro';
import { moveColumn } from 'src/dto/update.moveColumn.dto';
import { updateProject } from 'src/dto/update.project.dto';
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

    
    async createProject(dto: createProjectDto, userId:number){
        const project = await this.projectRepository.create({...dto, ownerId:userId})
        return this.projectRepository.save(project)
    }

    async getProjectById(dto: getProjectById, userId: number){
        await this.checkUser(dto.ownerId, userId)
        return await this.projectRepository.find({
            where: {id: dto.id},
            relations: ["columns", "tasks"],
        })
    }

    async getAllProjects(userId: number){
        return await this.projectRepository.findBy({
            ownerId:userId,
        })
    }

    async deleteProject(dto: DeleteProject, userId: number){
        await this.checkUser(dto.ownerId, userId)
        return await this.projectRepository.delete(dto.id)
    }

    async updateProject(dto:updateProject, userId:number){
        await this.checkUser(dto.ownerId, userId)
        const project = await this.projectRepository.findOne({where:{id: dto.id, ownerId: userId}})
        return await this.projectRepository.save({...project, name: dto.name, description: dto.description}) 
    }

    async deleteColumn(dto: DeleteProjectColumn, userId: number) {
        await this.checkUser(dto.ownerId, userId)
        const column = await this.columnRepository.delete(dto.id)
        return column
    }

    async createColumn(dto:createColumnDto, userId:number){
        const column = await this.columnRepository.create({...dto, ownerId: userId})
        return await this.columnRepository.save(column)
    }

    async getAllColumn(dto:getAllColumnsOfProject, userId: number){
        await this.checkUser(dto.ownerId, userId)
        return await this.columnRepository.find({
            where:{projectId:dto.projectId}
        })
    }

    async updateColumn(dto: updateColumn, userId:number){
        await this.checkUser(dto.ownerId, userId)
        const column = await this.columnRepository.findOne({where:{id: dto.id, ownerId: userId}})
        return await this.columnRepository.save({...column, name: dto.name, description: dto.description}) 
    }

    async moveColumn(dto: moveColumn, userId: number){
        await this.checkUser(dto.ownerId, userId)
        const column = await this.columnRepository.findOne({where:{id: dto.id}})
        return await this.columnRepository.save({...column, serialNum: dto.serialNum})
    }

    private async checkUser(idFromDto, idFromJWT){
        if (idFromDto != idFromJWT){
            throw new HttpException("Отказано в доступе", HttpStatus.BAD_REQUEST)
        }
    } 
}
