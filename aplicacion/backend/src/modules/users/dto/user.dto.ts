import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export enum Rol {
  AGRICULTOR = 'AGRICULTOR',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 32)
  contraseña: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsEnum(Rol)
  rol?: Rol;
}
