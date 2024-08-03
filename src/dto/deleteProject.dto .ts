import { ApiProperty } from "@nestjs/swagger";

export class DeleteProject {
    @ApiProperty({example:2, description:"Id удаляемого проекта или колонки"})
    readonly id: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего проект"})
    readonly ownerId: number
}