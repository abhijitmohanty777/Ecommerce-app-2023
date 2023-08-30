import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersInterface } from '../schema/users.schema';
import { Injectable } from '@nestjs/common';
import { USERS } from '../common/constant';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(USERS)
    private readonly UserModel: Model<UsersInterface>,
  ) {}
}
