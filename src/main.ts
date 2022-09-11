import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** Swagger configuration*/
  const options = new DocumentBuilder()
    .setTitle('Nestjs API starter')
    .setDescription('Nestjs API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  // config login swagger
  const documentApi = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`/swagger`, app, documentApi);

  await app.listen(4000);
}
bootstrap();
