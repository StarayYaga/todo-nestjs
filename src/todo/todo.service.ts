import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { createTask } from 'src/dto/createTask.dto';
import { deleteTask } from 'src/dto/delele.task.dto';
import { getAllTasksOfProject } from 'src/dto/get.allTaskOfProject.dto';
import { updateColumnInTask } from 'src/dto/update.columnInTask.dto';
import { moveTask } from 'src/dto/update.moveTask.dto';
import { updateTask } from 'src/dto/update.task.dto';
import { TaskEnt } from 'src/etityes/todo.entity';
import { Repository } from 'typeorm';



@Injectable()
export class TodoService {
    constructor(
        @Inject('taskRepository')
        private taskRepository: Repository<TaskEnt>,
    ) {}

    async creteTask(dto:createTask, userId: number){
        await this.checkUser(dto.ownerId, userId)
        if (dto.name.length >25) {
            throw new HttpException("Длина имени превышает 25 сивмолов!", HttpStatus.BAD_REQUEST)
        }
        const task = await this.taskRepository.create({...dto, ownerId: userId})
        return await this.taskRepository.manager.save(task)
    }

    async getAllTasksOfProject(dto:getAllTasksOfProject, userId:number){
        await this.checkUser(dto.ownerId, userId)
        return await this.taskRepository.find({
            where: {projectId: dto.projectId},
        })
    }

    async deleteTask(dto: deleteTask, userId:number){
        await this.checkUser(dto.ownerId, userId)
        return await this.taskRepository.delete(dto.id)
    }

    async updateTask(dto: updateTask, userId:number){
        await this.checkUser(dto.ownerId, userId)
        const task = await this.taskRepository.findOne({where:{id: dto.id}})
        return await this.taskRepository.save({...task, name: dto.name, description: dto.description}) 
    }

    async moveTaskToColumn(dto: updateColumnInTask, userId:number){
        await this.checkUser(dto.ownerId, userId)
        const task = await this.taskRepository.findOne({where:{id: dto.id}})
        return await this.taskRepository.save({...task, columnId: dto.columnId}) 
    }

    async moveTaskInColumn(dto: moveTask, userId:number){
        await this.checkUser(dto.ownerId, userId)
        const task = await this.taskRepository.findOne({where: {id: dto.id}})
        return await this.taskRepository.save({...dto, serialNum: dto.serialNum})
    }

    private async checkUser(idFromDto, idFromJWT){
        if (idFromDto != idFromJWT){
            throw new HttpException("Отказано в доступе", HttpStatus.BAD_REQUEST)
        }
    } 
}
