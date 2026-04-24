import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersRepository } from "../infrastructure/users.repository";
import { UpdateUserDto } from "../dto/update-user.input";
import { CreateUserDto } from "../dto/create-user.input";
import { Prisma } from "../../../generated/prisma/client";


@Injectable()
export class UsersService {
  constructor(private repo: UsersRepository) {}

 async findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const user = await this.repo.findById(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async createUser(data: CreateUserDto) {
  if (!data.email) {
    throw new BadRequestException('Email is required');
  }

  try {
    return await this.repo.create(data);
  } catch (error: unknown) {
    const prismaError = error as Prisma.PrismaClientKnownRequestError;

    if (prismaError?.code === 'P2002') {
      throw new ConflictException('Email already exists');
    }

    throw error;
  }
}


  async updateUser(id: number, data: UpdateUserDto) {
    await this.findOne(id);
    return this.repo.update(id, data);
  }

  async removeUser(id: number) {
    await this.findOne(id);
    return this.repo.delete(id);
  }
}