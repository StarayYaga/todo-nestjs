import { ApiProperty } from "@nestjs/swagger";

export class DeleteProjectColumn {
    @ApiProperty({example:2, description:"Id удаляемого проекта или колонки"})
    readonly id: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего колонку"})
    readonly ownerId: number
}