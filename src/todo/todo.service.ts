import { Inject, Injectable } from '@nestjs/common';
import { TaskEnt } from 'src/etityes/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @Inject('taskRepository')
        private taskRepository: Repository<TaskEnt>,
    ) {}

    async creteTask(){}
    async getAllTasksOfProject(){}
}
