import { ApiProperty } from "@nestjs/swagger"

export class moveColumn{
    @ApiProperty({example:"1222", description:"Уникальный id задачи"})
    readonly id: number;

    @ApiProperty({example:"1", description:"Порядковый номер столбца"})
    readonly serialNum: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего колонку"})
    readonly ownerId: number
} 