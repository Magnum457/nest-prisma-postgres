import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class BookRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.book.findMany();
  }
  findByUnique(input: Prisma.BookWhereUniqueInput) {
    return this.prismaService.book.findUnique({
      where: input,
    });
  }

  create(input: Prisma.BookCreateInput) {
    return this.prismaService.book.create({
      data: input,
    });
  }

  update(input: Prisma.BookUpdateInput, id: string) {
    return this.prismaService.book.update({
      data: input,
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this.prismaService.book.delete({
      where: {
        id,
      },
    });
  }
}
