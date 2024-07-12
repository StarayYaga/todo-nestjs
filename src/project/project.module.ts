import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.provider';
import { DatabaseModule } from 'src/database/database.module';
import { Column } from './column.provider';
import { Task } from 'src/todo/todo.provider';
import { TodoModule } from 'src/todo/todo.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    DatabaseModule, 
    TodoModule,
    AuthModule
  ],
  providers: [ProjectService, ...Project, ...Column, ...Task],
  controllers: [ProjectController]
})
export class ProjectModule {}
