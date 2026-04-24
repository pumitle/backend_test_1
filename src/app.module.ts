import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    UsersModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
  playground: true,
  sortSchema: true,

  formatError: (error) => {
    const original = error.extensions?.originalError as any;

    return {
      message: error.message,
      code: error.extensions?.code || 'INTERNAL_ERROR',
      status: original?.statusCode || 500,
    };
  },
}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}