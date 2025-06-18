import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DetectorController } from './detector.controller';
import { DetectorService } from './detector.service';

@Module({
  imports: [HttpModule],
  controllers: [DetectorController],
  providers: [DetectorService],
})
export class DetectorModule { }
