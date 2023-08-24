import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AllExceptionFilter } from './common/httpExceptionFiler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'App_FILTER',
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
