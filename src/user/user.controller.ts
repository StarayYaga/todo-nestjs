import { Controller, Post, Get, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { createUser } from 'src/dto/createUser.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEnt } from 'src/etityes/user.entity';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags("Работа с пользователем")
@Controller('user')
export class UserController {
    constructor(private UserService: UserService){}
    
    @ApiOperation({summary: "Создание пользлвателя"})
    @ApiResponse({status: 200, type: UserEnt})
    @Post()
    createUser(@Body() body: createUser){
        return this.UserService.createUser(body)
    }

    @ApiOperation({summary: "Получение всех пользователей"})
    @ApiResponse({status: 200, type: [UserEnt]})
    @UseGuards(JWTAuthGuard)
    @Get()
    getAll(){
        return this.UserService.getAllUser()
    }

    
}
