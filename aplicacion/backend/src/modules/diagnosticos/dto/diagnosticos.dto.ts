import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDiagnosticoDto {
  @IsNumber()
  plagaId: number;

  @IsString()
  @IsNotEmpty()
  resultado: string;

  @IsOptional()
  @IsString()
  recomendacion?: string;

  @IsDateString()
  fecha: string; // formato ISO

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}

export class FilterDiagnosticoDto {
  @IsOptional()
  @IsDateString()
  desde?: string;

  @IsOptional()
  @IsDateString()
  hasta?: string;

  @IsOptional()
  @IsString()
  plaga?: string;
}
