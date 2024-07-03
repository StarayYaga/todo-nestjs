import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserEnt {
  @ApiProperty({example:"1222", description:"Уникальный id пользователя"})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example:"anonymous", description:"Логин пользователя"})
  @Column({ length: 255 })
  login: string;

  @ApiProperty({example:"notPassword", description:"Пароль пользователя"})
  @Column()
  password: string

  @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Время создания пользователя "})
  @CreateDateColumn()
  createDate?:string

  @ApiProperty({example:"2024-07-01T08:56:04.552Z", description:"Время обновления создания пользователя "})
  @UpdateDateColumn()
  updateDate?:string
}