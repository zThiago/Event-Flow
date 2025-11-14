import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  const config = new DocumentBuilder()
  .setTitle('Event Flow API')
  .setDescription('Api para o aplicativo mobile Event Flow')
  .setVersion('0.1')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
