import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne ,  } from 'typeorm';
import { UserEnt } from './user.entity';
import { ProjectEnt } from './project.entity';
import { ColumnEnt } from './column.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TaskEnt {
    @ApiProperty({example:"1222", description:"Уникальный id задачи"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example:"Убрать баг в проекте", description:"Название задачи"})
    @Column({ length: 25 })
    name: string;

    @ApiProperty({example:"Убрать баг связанный с авторизацией", description:"Описание задачи"})
    @Column()
    description: string

    @ApiProperty({example:"14", description:"id пользователя, создавшего задачу"})
    @ManyToOne(()=> UserEnt, (user)=>user.id)
    ownerId: number

    @ApiProperty({example:"3", description:"id колонки, к которой относится задача"})
    @ManyToOne(()=> ProjectEnt, (column)=>column.id)
    columnId: number

    @ApiProperty({example:"1", description:"id проекта, к которому относится задача"})
    @ManyToOne(()=>ColumnEnt, (project)=>project.id)
    projectId: number

    @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Дата создания задачи"})
    @CreateDateColumn()
    createDate?:string

    @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Дата изменения задачи"})
    @UpdateDateColumn()
    updateDate?:string

}