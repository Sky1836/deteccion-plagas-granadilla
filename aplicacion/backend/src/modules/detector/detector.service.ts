import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { createReadStream } from 'fs';
import FormData from 'form-data';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DetectorService {
    constructor(private readonly http: HttpService) { }

    async detectarPlaga(path: string) {
        const form = new FormData();
        form.append('file', createReadStream(path));

        const response$ = this.http.post('http://localhost:9000/detectar', form, {
            headers: form.getHeaders(),
        });

        const res = await lastValueFrom(response$);
        return res.data;
    }
}
