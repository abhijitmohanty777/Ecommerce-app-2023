import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createLogIn(createUserDto);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginUserDto: LoginUserDto,
    // @Res({passthrough: true}) response: Response
  ) {
    const loginResponse = await this.usersService.getLogin(loginUserDto);
    // if(loginResponse.success){
    //   response.cookie('_abhi_cart_auth_token', loginResponse.result?.token, {httpOnly:true} )
    // }
    // delete loginResponse.result?.token;
    return loginResponse;
  }
}
