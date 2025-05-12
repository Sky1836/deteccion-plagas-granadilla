import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://127.0.0.1:5500'],
    methods: ['POST'],
    credentials: true,
  });

  await app.listen(3000); // 👈 ESTA LÍNEA ES LA QUE HACE QUE ESCUCHE
  console.log('🚀 Backend escuchando en http://localhost:3000');
}
bootstrap();
