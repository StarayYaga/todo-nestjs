import { ApiProperty } from "@nestjs/swagger"

export class createTask{

    @ApiProperty({example:"Убрать баг в проекте", description:"Название задачи"})
    readonly name: string
    @ApiProperty({example:"Убрать баг связанный с авторизацией", description:"Описание задачи"})
    readonly description: string
    @ApiProperty({example:"1222", description:"id пользователя, создавшего задачу"})
    readonly ownerId: number
    @ApiProperty({example:"3", description:"id колонки, к которой относится задача"})
    readonly columnId: number
    @ApiProperty({example:"1", description:"id проекта, к которому относится задача"})
    readonly projectId: number
    @ApiProperty({example:"1", description:"Порядковый номер задачи"})
    readonly serialNum: number
}