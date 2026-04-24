import { Module } from '@nestjs/common';
import { UsersResolver } from './presentation/users.resolver';
import { UsersService } from './application/users.service';
import { UsersRepository } from './infrastructure/users.repository';
import { PrismaService } from '../../../prisma/prisma.service';


@Module({
  providers: [UsersResolver, UsersService, UsersRepository, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
