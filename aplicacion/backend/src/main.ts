import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import './firebase-admin'; // 👈 Esto asegura que Firebase se inicialice al arrancar

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: ['http://localhost:3000', 'https://deteccion-plagas-granadilla.vercel.app', 'https://granashield.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    });

    await app.listen(3000);
    console.log('🚀 Backend escuchando en https://api.granashield.com');
  } catch (err) {
    console.error('❌ Error al iniciar el servidor:', err);
  }
}
bootstrap();

