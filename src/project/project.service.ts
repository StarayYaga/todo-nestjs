import { Inject, Injectable } from '@nestjs/common';
import { createProjectDto } from 'src/dto/createProject.dto';
import { ColumnEnt } from 'src/etityes/column.entity';
import { ProjectEnt } from 'src/etityes/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

    constructor(
        @Inject('projectRepository')
        private projectRepository: Repository<ProjectEnt>,
        @Inject('columnRepository')
        private columnkRepository: Repository<ColumnEnt>,
    ) {}

    
    async createProject(dto: createProjectDto){
        const user = await this.projectRepository.create(dto)
        return this.projectRepository.save(user)
    }

    async getAllProjects(id:number){
        return await this.projectRepository.findOneBy({ownerId: id})
    }

    

}
