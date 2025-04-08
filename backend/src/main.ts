import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

AppDataSource.initialize()
  .then(() => {
    console.log('📦 База данных подключена');
    // запуск сервера
  })
  .catch((err) => {
    console.error('Ошибка подключения к БД', err);
  });
