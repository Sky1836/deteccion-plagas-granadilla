import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { PlagasModule } from './plagas/plagas.module';
import { InsecticidasModule } from './insecticidas/insecticidas.module';
import { DetectorModule } from './detector/detector.module';
import { S3Service } from './upload/s3.service';
import { UploadController } from './upload/upload.controller';
import { UploadModule } from './upload/upload.module';
import { AchievementsModule } from './achievements/achievements.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AuthModule,
    DiagnosticosModule,
    PlagasModule,
    InsecticidasModule,
    DetectorModule,
    UploadModule,
    AchievementsModule,
    MailModule,
  ],
  providers: [S3Service],
  controllers: [UploadController]
})
export class AppModule {}
