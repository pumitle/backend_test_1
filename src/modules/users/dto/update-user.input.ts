import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEmail, IsString } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}