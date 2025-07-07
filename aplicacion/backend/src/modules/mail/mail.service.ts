import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import * as crypto from 'crypto';
(global as any).crypto = crypto;

dotenv.config(); // Cargar .env si no usas @nestjs/config

@Injectable()
export class MailService {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    @Cron(CronExpression.EVERY_DAY_AT_8AM)
    async enviarRecordatorio() {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'cielo.morillo@espoch.edu.ec',
            subject: '🌿 Revisión de cultivos',
            text: 'Hola, recuerda revisar tus cultivos y registrar cualquier plaga en la app.',
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('✅ Correo enviado correctamente');
        } catch (error) {
            console.error('❌ Error al enviar correo:', error);
        }
    }
}
