import { Module } from '@nestjs/common';
import { DiagnosticosController } from './diagnosticos.controller';
import { DiagnosticosService } from './diagnosticos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DiagnosticosController],
  providers: [DiagnosticosService],
})
export class DiagnosticosModule {}
