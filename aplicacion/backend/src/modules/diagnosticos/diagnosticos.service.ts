import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDiagnosticoDto, FilterDiagnosticoDto } from './dto/diagnosticos.dto';

@Injectable()
export class DiagnosticosService {
  constructor(private readonly prisma: PrismaService) {}

  async createManual(dto: CreateDiagnosticoDto, userId: number) {
    return this.prisma.diagnostico.create({
      data: {
        userId,
        plagaId: dto.plagaId,
        resultado: dto.resultado,
        recomendacion: dto.recomendacion,
        imagenUrl: dto.imagenUrl ?? '',
        fecha: new Date(dto.fecha),
      },
      include: {
        plaga: true,
      },
    });
  }

  async getHistorial(userId: number, filters: FilterDiagnosticoDto) {
    return this.prisma.diagnostico.findMany({
      where: {
        userId,
        fecha: {
          gte: filters.desde ? new Date(filters.desde) : undefined,
          lte: filters.hasta ? new Date(filters.hasta) : undefined,
        },
        plaga: filters.plaga
          ? {
              nombre: {
                contains: filters.plaga,
                mode: 'insensitive',
              },
            }
          : undefined,
      },
      orderBy: {
        fecha: 'desc',
      },
      include: {
        plaga: true,
      },
    });
  }

  // ✅ Nuevo método para admins: obtener todos los diagnósticos
  async findAll() {
    return this.prisma.diagnostico.findMany({
      orderBy: {
        fecha: 'desc',
      },
      include: {
        plaga: true,
      },
    });
  }
}
