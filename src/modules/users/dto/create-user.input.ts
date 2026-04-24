import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  email!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;
}
