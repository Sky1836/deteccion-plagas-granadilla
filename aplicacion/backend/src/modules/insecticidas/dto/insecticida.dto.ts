import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateInsecticidaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del insecticida es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El compuesto es obligatorio' })
  compuesto: string;

  @IsString()
  @IsNotEmpty({ message: 'La forma de aplicación es obligatoria' })
  aplicacion: string;

  @IsInt({ message: 'El ID de la plaga debe ser un número' })
  plagaId: number;
}
