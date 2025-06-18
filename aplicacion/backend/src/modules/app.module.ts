import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { PlagasModule } from './plagas/plagas.module';
import { InsecticidasModule } from './insecticidas/insecticidas.module';
import { DetectorModule } from './detector/detector.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    DiagnosticosModule,
    PlagasModule,
    InsecticidasModule,
    DetectorModule,
  ]
})
export class AppModule {}
