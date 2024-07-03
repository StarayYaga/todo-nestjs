import { Module } from '@nestjs/common';

import { Database } from './database.provider';

@Module({
  controllers: [],
  providers: [ ...Database],
  exports: [...Database]
})
export class DatabaseModule {}
