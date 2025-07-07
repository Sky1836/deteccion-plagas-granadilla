import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { UnlockAchievementDto } from './dto/unlock-achievement.dto';

@Controller('achievements')
export class AchievementsController {
    constructor(private readonly achievementsService: AchievementsService) { }

    // 🔓 Desbloquear un logro
    @Post('unlock')
    async unlockAchievement(@Body() dto: UnlockAchievementDto) {
        return this.achievementsService.unlockAchievement(dto);
    }

    // 📦 Obtener todos los logros de un usuario
    @Get(':userId')
    async getUserAchievements(@Param('userId', ParseIntPipe) userId: number) {
        return this.achievementsService.getUserAchievements(userId);
    }
}
