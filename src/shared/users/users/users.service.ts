import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/create-user.dto';
import { UsersRepository } from '../../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createLogIn(createUserDto: CreateUserDto) {
    try {
      // generate the hash password
      // createUserDto.password = await generateHashPassword();
      // // check is it for admin
      // if(
      //   createUserDto.type === UserTypes.ADMIN &&
      //   createUserDto.secretToken !== process.env.ADMIN_SECRET_TOKEN
      // ){
      //     throw new Error("Not allowed to create admin");
      // }
    } catch (error) {
      throw Error;
    }
  }

  async getLogin(loginUserDto: LoginUserDto) {
    return 'loggedIn';
  }
}
