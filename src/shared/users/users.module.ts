import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { MongoModelModule } from '../repositories/mongo.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MongoModelModule],
})
export class UsersModule {}
