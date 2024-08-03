import { ApiProperty } from "@nestjs/swagger"

export class updateColumnInTask{
    @ApiProperty({example:"1222", description:"Уникальный id задачи"})
    readonly id: number;

    @ApiProperty({example:"3", description:"id колонки, к которой относится задача"})
    readonly columnId: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    ownerId: number
} 