import { ApiProperty } from "@nestjs/swagger"

export class updateColumn{
    @ApiProperty({example:"1222", description:"Уникальный id колонки"})
    readonly id: number;

    @ApiProperty({example:"В процессе", description:"Название колонки"})
    readonly name: string;

    @ApiProperty({example:"Все задачи, которые нахотядся в процессе выполнения", description:"Описание колонки"})
    readonly description: string

    @ApiProperty({example:"1222", description:"id проекта"})
    readonly projectId: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего колонку"})
    readonly ownerId: number
} 