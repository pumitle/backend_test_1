import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GqlExceptionFilter } from './common/filters/gql-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GqlExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
