import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { InsecticidasService } from './insecticidas.service';
import { CreateInsecticidaDto } from './dto/insecticida.dto';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
// import { Rol } from '../users/dto/user.dto';

@Controller('insecticidas')
// @UseGuards(RolesGuard)
export class InsecticidasController {
  constructor(private readonly insecticidasService: InsecticidasService) {}

  // @Roles(Rol.ADMIN)
  @Post()
  async create(@Body() dto: CreateInsecticidaDto) {
    return this.insecticidasService.create(dto);
  }

  @Get()
  async findAll() {
    return this.insecticidasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.insecticidasService.findOne(Number(id));
  }

  @Get('plaga/:plagaId')
  async findByPlaga(@Param('plagaId') plagaId: string) {
    return this.insecticidasService.findByPlaga(Number(plagaId));
  }

  // @Roles(Rol.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.insecticidasService.delete(Number(id));
  }
}
