import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersInterface, UserSchema } from '../schema/users.schema';
import { USERS } from '../common/constant';

@Module({
  controllers: [],
  providers: [UsersRepository],
  imports: [
    MongooseModule.forFeature([
      {
        name: USERS,
        schema: UserSchema,
      },
    ]),
  ],
  exports: [UsersRepository],
})
export class MongoModelModule {}
