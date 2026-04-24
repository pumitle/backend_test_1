import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/prisma.service";
import { UpdateUserDto } from "../dto/update-user.input";
import { CreateUserDto } from "../dto/create-user.input";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(data: CreateUserDto) {
    return this.prisma.user.create({ data: {
      email: data.email!,
      name: data.name,
    }, });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}