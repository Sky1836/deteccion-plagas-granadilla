import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('token') token: string) {
    const user = await this.authService.validateFirebaseToken(token);
    return { user };
  }

  // ✅ Nuevo endpoint: verificar si un correo existe
  @Post('check-email')
  async checkEmail(@Body('email') email: string) {
    return this.authService.checkIfEmailExists(email);
  }
}
