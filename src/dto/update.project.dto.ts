import { ApiProperty } from "@nestjs/swagger"

export class updateProject{
    @ApiProperty({example:"1222", description:"Уникальный id проекта"})
    readonly id: number;

    @ApiProperty({example:"Test project", description:"Название проекта"})
    readonly name: string;

    @ApiProperty({example:"Этот проект что-то там делает", description:"Описание проекта"})
    readonly description: string

    @ApiProperty({example:"14", description:"id пользователя, создавшего проект"})
    readonly ownerId?: number
} 
