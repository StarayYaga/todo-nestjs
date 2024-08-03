import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
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
    @Column()
    @ManyToOne(()=> UserEnt, (userEnt)=>userEnt.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
    ownerId: number

    @ApiProperty({example:"3", description:"id колонки, к которой относится задача"})
    @Column()
    @ManyToOne(()=> ColumnEnt, (columnEnt)=>columnEnt.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'columnId', referencedColumnName: 'id' })
    columnId: number

    @ApiProperty({example:"1222", description:"id проекта"})
    @Column()
    @ManyToOne(()=>ProjectEnt, (projectEnt)=>projectEnt.id , { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'projectId', referencedColumnName: 'id' })
    projectId: number

    @ApiProperty({example:"1", description:"Порядковый номер задачи"})
    @Column()
    serialNum: number

    @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Дата создания задачи"})
    @CreateDateColumn()
    createDate?:string

    @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Дата изменения задачи"})
    @UpdateDateColumn()
    updateDate?:string
}