import { DataSource } from "typeorm"
import { ProjectEnt } from "src/etityes/project.entity"

export const Project = [
    {
        provide: "projectRepository",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProjectEnt),
        inject: ['DATA_SOURCE'],
    }
]