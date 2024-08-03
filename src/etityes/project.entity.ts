import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEnt } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ColumnEnt } from './column.entity';
import { TaskEnt } from './todo.entity';

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
    @Column()
    @ManyToOne(()=> UserEnt, (userEnt)=>userEnt.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
    ownerId: number

    @OneToMany(()=>ColumnEnt, (columnEnt)=>columnEnt.projectId)
    @JoinColumn()
    columns: ColumnEnt[]

    @OneToMany(()=>TaskEnt, (taskEnt)=>taskEnt.projectId)
    @JoinColumn()
    tasks: TaskEnt[]
}
