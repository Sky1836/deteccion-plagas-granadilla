import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DetectorService } from './detector.service';
import { diskStorage } from 'multer';
import { join } from 'path';

@Controller('detector')
export class DetectorController {
    constructor(private readonly detectorService: DetectorService) { }

    @Post()
    @UseInterceptors(
        FileInterceptor('imagen', {
            storage: diskStorage({
                destination: './uploads', // asegúrate de que esta carpeta exista
                filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
            }),
        }),
    )
    async detectar(@UploadedFile() file: any) {
        const path = join(process.cwd(), file.path);
        return this.detectorService.detectarPlaga(path);
    }
}
