import { ApiProperty } from "@nestjs/swagger"

export class getAllTasksOfProject{
    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    ownerId: number

    @ApiProperty({example:"1", description:"id проекта, к которому относится задача"})
    projectId: number
}