import { ApiProperty } from "@nestjs/swagger"

export class moveTask{
    @ApiProperty({example:"1", description:"Уникальный id задачи"})
    readonly id: number;

    @ApiProperty({example:"1", description:"Порядковый номер звдачи"})
    readonly serialNum: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    ownerId: number
} 