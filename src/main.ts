/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  }),
);

// Swagger Configuraion...
const config = new DocumentBuilder()
.setTitle('NestJs Masterclass - Blog app API')
.setDescription('Use the base API URL as http://localhost:3030')
.setTermsOfService('http://localhost:3030/terms-off-service')
.setLicense('MIT License','https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt')
.addServer('http://localhost:3030')
.setVersion('1.0').build();
// Instantiate Document..
const document=SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document);
  await app.listen(3030);
}
bootstrap();
