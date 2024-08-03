import { ApiProperty } from "@nestjs/swagger"

export class getProjectById{
    @ApiProperty({example:"1", description:"id проекта, к которому относится задача"})
    readonly id: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего проект"})
    readonly ownerId: number
}