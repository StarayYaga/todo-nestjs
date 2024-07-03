import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEnt } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ProjectEnt {

    @ApiProperty({example:"1222", description:"Уникальный id проекта"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example:"Test project", description:"Название проекта"})
    @Column()
    name: string;

    @ApiProperty({example:"Этот проект что-то там делает", description:"Описание проекта"})
    @Column()
    description: string

    @ApiProperty({example:"14", description:"id пользователя, создавшего проект"})
    @ManyToOne(() => UserEnt, (user) => user.id)
    ownerId: number
}