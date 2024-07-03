import { HttpException, Injectable, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUser } from 'src/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs"
import { UserEnt } from 'src/etityes/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}
   
    async login(Dto: createUser){
        const user = await this.validateUser(Dto)
        return await this.generateToken(user)
    }

    async registration(Dto: createUser){
        const candidate = await this.userService.getUserByLogin(Dto.login)
        if (candidate){
            throw new HttpException("Пользователь с таким именем существует", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(Dto.password, 5)
        const user = await this.userService.createUser({...Dto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: UserEnt){
        const payload = {id: user.id, login: user.login}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: createUser){
        const user = await this.userService.getUserByLogin(dto.login)
        const passwordEqual = await bcrypt.compare(dto.password, user.password)
        if (user &&  passwordEqual){
            return user
        }
        throw new UnauthorizedException({message: "Неверный логин или пароль."})
    }
}
