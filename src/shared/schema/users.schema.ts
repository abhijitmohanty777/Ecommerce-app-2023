import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

export enum userTypes {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: false })
  isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
