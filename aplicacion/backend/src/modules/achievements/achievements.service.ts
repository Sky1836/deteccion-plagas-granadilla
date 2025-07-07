import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UnlockAchievementDto } from './dto/unlock-achievement.dto';

@Injectable()
export class AchievementsService {
    constructor(private readonly prisma: PrismaService) { }

    async unlockAchievement(dto: UnlockAchievementDto) {
        const { userId, name, description, icon } = dto;

        const exists = await this.prisma.achievement.findFirst({
            where: { userId, name },
        });

        if (exists) {
            return { unlocked: false, message: 'Logro ya obtenido' };
        }

        const achievement = await this.prisma.achievement.create({
            data: { userId, name, description, icon },
        });

        return { unlocked: true, achievement };
    }

    async getUserAchievements(userId: number) {
        return this.prisma.achievement.findMany({ where: { userId } });
    }
}
