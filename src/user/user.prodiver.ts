import { DataSource } from "typeorm"
import { UserEnt } from "src/etityes/user.entity"

export const User = [
    {
        provide: "userRepository",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEnt),
        inject: ['DATA_SOURCE'],
    }
]