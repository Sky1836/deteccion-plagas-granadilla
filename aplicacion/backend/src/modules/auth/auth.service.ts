import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import admin from '../../firebase-admin'; // ruta relativa al archivo que creaste
import { Rol } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateFirebaseToken(idToken: string) {
    console.log('⏳ Verificando token recibido...');

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log('✅ Token decodificado correctamente:', decodedToken);

      const email = decodedToken.email;
      const name = decodedToken.name;
      const picture = decodedToken.picture;

      if (!email) {
        console.log('❌ No se encontró email en el token');
        throw new UnauthorizedException('No se encontró un email en el token');
      }

      let user = await this.prisma.user.findUnique({ where: { email } });
      console.log(user ? '🔍 Usuario encontrado en BD' : '🆕 Usuario no existe, creando...');

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            email,
            nombre: name || '',
            telefono: '',
            rol: Rol.AGRICULTOR,
          },
        });
        console.log('✅ Usuario creado:', user);
      }

      console.log('🚀 Usuario autenticado correctamente');
      return user;
    } catch (err) {
      console.error('❌ Error al verificar token de Firebase:', err);
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
