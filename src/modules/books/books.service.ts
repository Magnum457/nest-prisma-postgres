import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookInput } from './dto/book';
import { BookRepository } from './repositories';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getBooks(): Promise<any> {
    try {
      return this.bookRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async updateBookAmount(newAmount: number, id: string): Promise<any> {
    const foundBookById = await this.bookRepository.findByUnique({
      id,
    });

    if (!foundBookById) throw new NotFoundException('Livro não encontrado');

    try {
      return this.bookRepository.update({ amount: newAmount }, id);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async createBook(input: CreateBookInput): Promise<any> {
    const foundBookByName = await this.bookRepository.findByUnique({
      name: input.name,
    });

    if (foundBookByName)
      throw new ConflictException('Já existe um livro com este nome');

    try {
      return this.bookRepository.create(input);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
