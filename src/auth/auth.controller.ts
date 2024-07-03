import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUser } from 'src/dto/createUser.dto';
import { AuthService } from './auth.service';

@ApiTags("Работа с авторизацией")
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @ApiOperation({summary: "Авторизация пользователя"})
    @ApiResponse({status: 200})
    @Post("/login")
    login(@Body() createUserDto: createUser){
        return  this.authService.login(createUserDto)
    }

    @ApiOperation({summary: "Регистрация нового пользователся"})
    @ApiResponse({status: 200,})
    @Post("/registration")
    registration(@Body() createUserDto: createUser){
        return this.authService.registration(createUserDto)
    }

}
