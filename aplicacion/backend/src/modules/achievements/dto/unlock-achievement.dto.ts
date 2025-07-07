import { IsInt, IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class UnlockAchievementDto {
    @IsInt()
    userId: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsUrl({}, { message: 'El icono debe ser una URL válida' })
    icon: string;
}
