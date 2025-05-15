import { Controller, Post, Get, Param, Body, Delete, Query, UseGuards } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { CreatePlagaDto } from './dto/plaga.dto';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
// import { Rol } from '../users/dto/user.dto';

@Controller('plagas')
// @UseGuards(RolesGuard) // puedes activar esto si ya tienes auth con roles
export class PlagasController {
  constructor(private readonly plagasService: PlagasService) {}

  // @Roles(Rol.ADMIN)
  @Post()
  async create(@Body() dto: CreatePlagaDto) {
    return this.plagasService.create(dto);
  }

  @Get()
  async findAll() {
    return this.plagasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.plagasService.findOne(Number(id));
  }

  @Get('buscar')
  async findByNombre(@Query('nombre') nombre: string) {
    return this.plagasService.findByNombre(nombre);
  }

  // @Roles(Rol.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.plagasService.delete(Number(id));
  }
}
