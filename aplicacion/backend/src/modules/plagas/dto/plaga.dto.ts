import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlagaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion: string;

  @IsString()
  @IsNotEmpty({ message: 'El tipo es obligatorio (ej. hongo, insecto, etc.)' })
  tipo: string;
}
