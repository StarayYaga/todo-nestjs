import { ApiProperty } from "@nestjs/swagger"

export class createProjectDto{
    @ApiProperty({example:"Test project", description:"Название проекта"})
    readonly name: string
    @ApiProperty({example:"Этот проект что-то там делает", description:"Описание проекта"})
    readonly description: string
    @ApiProperty({example:"14", description:"id пользователя, создавшего проект"})
    readonly ownerId?: number
}