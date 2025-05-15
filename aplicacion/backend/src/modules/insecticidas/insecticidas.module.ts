import { Module } from '@nestjs/common';
import { InsecticidasService } from './insecticidas.service';
import { InsecticidasController } from './insecticidas.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [InsecticidasService, PrismaService],
  controllers: [InsecticidasController]
})
export class InsecticidasModule {}
