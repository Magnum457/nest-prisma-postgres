import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { BookRepository } from './repositories';

@Module({
  controllers: [BookController],
  providers: [BookRepository, BookService],
})
export class BookModule {}
