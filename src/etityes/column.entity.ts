import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Collection } from 'typeorm';

@Entity()
export class ColumnEnt{
    @ApiProperty({example:"1222", description:"Уникальный id колонки"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example:"В процессе", description:"Название колонки"})
    @Column({ length: 25 })
    name: string;

    @ApiProperty({example:"Все задачи, которые нахотядся в процессе выполнения", description:"Описание колонки"})
    @CreateDateColumn()
    createDate?:string
}