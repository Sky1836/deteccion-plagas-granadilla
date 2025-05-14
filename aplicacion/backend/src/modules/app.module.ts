import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    DiagnosticosModule,
  ]
})
export class AppModule {}
