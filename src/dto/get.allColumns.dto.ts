import { ApiProperty } from "@nestjs/swagger"

export class getAllColumnsOfProject{
    @ApiProperty({example:"1", description:"id колонки"})
    readonly projectId: number
    @ApiProperty({example:"14", description:"id пользователя, создавшего колонку"})
    readonly ownerId: number
}