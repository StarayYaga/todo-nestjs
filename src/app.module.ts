import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule, 
    DatabaseModule, 
    TodoModule,
    ConfigModule.forRoot(),
    ProjectModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
