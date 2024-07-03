import { DataSource } from "typeorm"
import { TaskEnt } from "src/etityes/todo.entity"

export const Task = [
    {
        provide: "taskRepository",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TaskEnt),
        inject: ['DATA_SOURCE'],
    }
]