import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { UserTypes } from '../common/constant';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class UsersInterface extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: [UserTypes.ADMIN, UserTypes.CUSTOMER] })
  type: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: false })
  otp: string;

  @Prop({ default: false })
  otpExpiredTime: Date;
}

export const UserSchema = SchemaFactory.createForClass(UsersInterface);
