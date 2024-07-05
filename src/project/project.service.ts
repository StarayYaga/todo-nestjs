import { Inject, Injectable } from '@nestjs/common';
import { createColumnDto } from 'src/dto/createColumn.dto';
import { createProjectDto } from 'src/dto/createProject.dto';
import { ColumnEnt } from 'src/etityes/column.entity';
import { ProjectEnt } from 'src/etityes/project.entity';
import { TaskEnt } from 'src/etityes/todo.entity';
import { TodoService } from 'src/todo/todo.service';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

    constructor(
        @Inject('projectRepository')
        private projectRepository: Repository<ProjectEnt>,
        @Inject('columnRepository')
        private columnRepository: Repository<ColumnEnt>,
        // @Inject('taskRepository')
        // private taskRepository: Repository<TaskEnt>,
        // private taskService: TodoService
    ) {}

    
    async createProject(dto: createProjectDto){
        const project = await this.projectRepository.create(dto)
        return this.projectRepository.save(project)
    }

    async getAllProjects(id:number){
        return await this.projectRepository.findOneBy({ownerId: id})
    }

    async createColumn(dto:createColumnDto){
        const column = await this.columnRepository.create(dto)
        return await this.columnRepository.save(column)
    }

    async getAllColumn(id:number){
        return await this.columnRepository.find({where: {projectId:id}})
    }
}
