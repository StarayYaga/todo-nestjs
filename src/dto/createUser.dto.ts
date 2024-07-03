import { ApiProperty } from "@nestjs/swagger"

export class createUser {
    @ApiProperty({example:"anonymous", description:"Логин пользователя"})
    readonly login: string
    @ApiProperty({example:"notPassword", description:"Пароль пользователя"})
    readonly password: string
}