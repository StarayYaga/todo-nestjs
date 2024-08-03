import { ApiProperty } from "@nestjs/swagger"

export class deleteTask{
    @ApiProperty({example:"1222", description:"Уникальный id задачи"})
    readonly id?: number;

    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    ownerId: number
}