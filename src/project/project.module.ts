import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.provider';
import { DatabaseModule } from 'src/database/database.module';
import { Column } from './column.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ProjectService, ...Project, ...Column],
  controllers: [ProjectController]
})
export class ProjectModule {}
