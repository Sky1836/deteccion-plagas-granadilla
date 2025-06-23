import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import './firebase-admin'; // 👈 Esto asegura que Firebase se inicialice al arrancar

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: ['http://localhost:3000'],
      methods: ['POST'],
      credentials: true,
    });

    await app.listen(3000);
    console.log('🚀 Backend escuchando en https://deteccion-plagas-granadilla-production.up.railway.app');
  } catch (err) {
    console.error('❌ Error al iniciar el servidor:', err);
  }
}
bootstrap();

