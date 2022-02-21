import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { BookModule } from './modules/books/books.module';

@Module({
  imports: [PrismaModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
