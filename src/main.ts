import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './common/responseInterceptor';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformationInterceptor)

  await app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
}
bootstrap();
