import { ApiProperty } from "@nestjs/swagger"

export class updateTask{
    @ApiProperty({example:"1222", description:"Уникальный id задачи"})
    readonly id?: number;
    @ApiProperty({example:"Убрать баг в проекте", description:"Название задачи"})
    readonly name: string
    @ApiProperty({example:"Убрать баг связанный с авторизацией", description:"Описание задачи"})
    readonly description: string
    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    ownerId: number
}