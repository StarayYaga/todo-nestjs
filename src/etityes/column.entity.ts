import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Collection, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEnt } from './user.entity';
import { ProjectEnt } from './project.entity';
import { TaskEnt } from './todo.entity';

@Entity()
export class ColumnEnt{
    @ApiProperty({example:"1222", description:"Уникальный id колонки"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example:"В процессе", description:"Название колонки"})
    @Column({ length: 25 })
    name: string;

    @ApiProperty({example:"Все задачи, которые нахотядся в процессе выполнения", description:"Описание колонки"})
    @Column()
    description: string

    @ApiProperty({example:"1222", description:"id проекта"})
    @Column()
    @ManyToOne(()=>ProjectEnt, (projectEnt)=>projectEnt.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'projectId', referencedColumnName: 'id' })
    projectId: number

    @ApiProperty({example:"14", description:"id пользователя, создавшего колонку"})
    @Column()
    @ManyToOne(()=>UserEnt, (userEnt)=>userEnt.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
    ownerId: number

    @ApiProperty({example:"1", description:"Порядковый номер столбца"})
    @Column()
    serialNum: number

    @OneToMany(()=>TaskEnt, (taskEnt)=>taskEnt.columnId)
    @JoinColumn()
    task: TaskEnt[]

    @ApiProperty({example:"Все задачи, которые нахотядся в процессе выполнения", description:"Описание колонки"})
    @CreateDateColumn()
    createDate?:string
}