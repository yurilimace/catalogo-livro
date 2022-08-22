import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from './Config/firebaseConfig';
import { getStorage } from 'firebase/storage';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  initializeApp(firebaseConfig);

  const config = new DocumentBuilder()
    .setTitle('Manga Collection API')
    .setDescription('Manga Collection api routes')
    .setVersion('1.0')
    .addTag('User')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.PORT) | 3000);
}
bootstrap();
