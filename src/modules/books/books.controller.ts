import {
  BadRequestException,
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { yupCreateBookInput, yupUpdateBookAmountById } from 'src/yup/books';
import { BookService } from './books.service';
import { CreateBookInput, UpdateBookAmountInput } from './dto/book';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/books')
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Put('/books/amount/:id')
  async updateBookAmount(
    @Body() input: UpdateBookAmountInput,
    @Param() params,
  ) {
    const isValidInput = yupUpdateBookAmountById.isValidSync(input);

    if (!isValidInput)
      throw new BadRequestException('O campo amount é requerido');

    return this.bookService.updateBookAmount(input.amount, params.id);
  }

  @Post('/books')
  async createBook(@Body() input: CreateBookInput) {
    const isValidInput = yupCreateBookInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Seu input está inválido');

    return this.bookService.createBook(input);
  }
}
