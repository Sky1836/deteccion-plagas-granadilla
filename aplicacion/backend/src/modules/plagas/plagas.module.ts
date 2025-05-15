import { Module } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { PlagasController } from './plagas.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PlagasService, PrismaService],
  controllers: [PlagasController]
})
export class PlagasModule {}
