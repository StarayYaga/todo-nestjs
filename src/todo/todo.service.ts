import { Inject, Injectable } from '@nestjs/common';
import { createTask } from 'src/dto/createTask.dto';
import { TaskEnt } from 'src/etityes/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @Inject('taskRepository')
        private taskRepository: Repository<TaskEnt>,
    ) {}

    async creteTask(dto:createTask){
        const task = await this.taskRepository.create(dto)
        return await this.taskRepository.manager.save(task)
    }


    async getAllTasksOfProject(dto){
        return await this.taskRepository.find({where: {projectId:dto.id}})
    }
}
