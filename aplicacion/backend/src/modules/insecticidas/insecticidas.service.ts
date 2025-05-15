import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInsecticidaDto } from './dto/insecticida.dto';

@Injectable()
export class InsecticidasService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear nuevo insecticida
  async create(dto: CreateInsecticidaDto) {
    return this.prisma.insecticida.create({
      data: {
        nombre: dto.nombre,
        compuesto: dto.compuesto,
        aplicacion: dto.aplicacion,
        plagaId: dto.plagaId,
      },
    });
  }

  // Obtener todos
  async findAll() {
    return this.prisma.insecticida.findMany({
      orderBy: { id: 'desc' },
      include: { plaga: true },
    });
  }

  // Obtener por ID
  async findOne(id: number) {
    const insecticida = await this.prisma.insecticida.findUnique({
      where: { id },
      include: { plaga: true },
    });
    if (!insecticida) throw new NotFoundException('Insecticida no encontrado');
    return insecticida;
  }

  // Obtener por plaga
  async findByPlaga(plagaId: number) {
    return this.prisma.insecticida.findMany({
      where: { plagaId },
      orderBy: { id: 'desc' },
    });
  }

  // Eliminar
  async delete(id: number) {
    return this.prisma.insecticida.delete({ where: { id } });
  }
}
