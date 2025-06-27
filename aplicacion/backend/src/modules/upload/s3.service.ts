import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import * as mime from 'mime-types';
import { v4 as uuid } from 'uuid';

@Injectable()
export class S3Service {
    private readonly s3 = new S3Client({
        region: 'us-east-2',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });

    async uploadImage(file: Express.Multer.File) {
        const fileName = `${uuid()}.${mime.extension(file.mimetype)}`;
        const command = new PutObjectCommand({
            Bucket: 'imagenes-granadilla-cielo',
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
        });

        await this.s3.send(command);

        return {
            url: `https://imagenes-granadilla-cielo.s3.amazonaws.com/${fileName}`,
        };
    }
}
