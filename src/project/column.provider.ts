import { DataSource } from "typeorm"
import { ColumnEnt } from "src/etityes/column.entity"

export const Column = [
    {
        provide: "columnRepository",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ColumnEnt),
        inject: ['DATA_SOURCE'],
    }
]