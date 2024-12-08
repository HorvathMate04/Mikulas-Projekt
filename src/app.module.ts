import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GiftsModule } from './gifts/gifts.module';
import { KidsModule } from './kids/kids.module';

@Module({
  imports: [PrismaModule, GiftsModule, KidsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
