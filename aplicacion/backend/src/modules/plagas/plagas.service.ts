import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlagaDto } from './dto/plaga.dto';

@Injectable()
export class PlagasService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear nueva plaga
  async create(dto: CreatePlagaDto) {
    return this.prisma.plaga.create({
      data: {
        nombre: dto.nombre,
        descripcion: dto.descripcion,
        tipo: dto.tipo,
      },
    });
  }

  // Obtener todas las plagas
  async findAll() {
    return this.prisma.plaga.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Obtener plaga por ID
  async findOne(id: number) {
    const plaga = await this.prisma.plaga.findUnique({ where: { id } });
    if (!plaga) throw new NotFoundException('Plaga no encontrada');
    return plaga;
  }

  // Buscar plagas por nombre (contiene, insensible a mayúsculas)
  async findByNombre(nombre: string) {
    return this.prisma.plaga.findMany({
      where: {
        nombre: {
          contains: nombre,
          mode: 'insensitive',
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Eliminar una plaga
  async delete(id: number) {
    return this.prisma.plaga.delete({ where: { id } });
  }
}
