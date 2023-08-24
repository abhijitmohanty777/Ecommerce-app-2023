import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ! Ecommerce-app-2023 ! abhi cart';
  }
}
