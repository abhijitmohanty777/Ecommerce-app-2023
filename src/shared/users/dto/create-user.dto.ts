import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserTypes } from './../../common/constant';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsIn([UserTypes.ADMIN, UserTypes.CUSTOMER])
  type: string;

  @IsOptional()
  @IsString()
  secretToken?: string;
}

export class LoginUserDto {
  email: string;
  password: string;
}
