import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto, FilterDiagnosticoDto } from './dto/diagnosticos.dto';

@Controller('diagnosticos')
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) {}

  @Post()
  async createManual(
    @Body() dto: CreateDiagnosticoDto & { userId: number }
  ) {
    const { userId, ...rest } = dto;
    return this.diagnosticosService.createManual(rest, userId);
  }

  @Get()
  async getHistorial(
    @Query() filters: FilterDiagnosticoDto & { userId: string }
  ) {
    return this.diagnosticosService.getHistorial(Number(filters.userId), filters);
  }
}
