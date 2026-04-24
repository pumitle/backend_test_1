import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from '../application/users.service';
import { User } from '../domain/user.entity';
import { UpdateUserDto } from '../dto/update-user.input';
import { CreateUserDto } from '../dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}


  // createUser
  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserDto,) {
    return this.usersService.createUser(data);
  }


  // findAll
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  // findOne
  @Query(() => User, { name: 'user' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.usersService.findOne(id);
  }

  // updateUser
  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, data);
  }

  // removeUser
  @Mutation(() => User)
  removeUser(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.usersService.removeUser(id);
  }
}