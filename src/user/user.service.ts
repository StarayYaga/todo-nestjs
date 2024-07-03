import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEnt } from 'src/etityes/user.entity';
import { createUser } from 'src/dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('userRepository')
        private userRepository: Repository<UserEnt>,
    ) {}
    
    async createUser(createUserDto: createUser){
        const user = await this.userRepository.create(createUserDto)
        return this.userRepository.save(user)
    }

    async deleteUser(deleteUserDto){
        return await this.userRepository.delete(deleteUserDto)
    }

    async getAllUser(){
        return await this.userRepository.find()
    }

    async getUserByLogin(login: string){
        return await this.userRepository.findOneBy({login:login})
    }
}
