import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.prodiver';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(()=>AuthModule)

  ],
  controllers: [UserController],
  providers: [UserService, ...User],
  exports: [
    UserService,
  ]
})
export class UserModule {}
