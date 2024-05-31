import dotenv from 'dotenv';
import { botService } from './services/bot.service.js';
dotenv.config();

botService();
