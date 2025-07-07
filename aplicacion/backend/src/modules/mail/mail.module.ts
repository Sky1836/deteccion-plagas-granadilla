import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailService } from './mail.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [MailService],
})
export class MailModule { }
