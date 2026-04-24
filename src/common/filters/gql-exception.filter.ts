import { Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch()
export class GqlExceptionFilter implements ExceptionFilter {
  catch(exception: any) {
    if (exception instanceof HttpException) {
      return exception;
    }

    return new HttpException('Unexpected error', 500);
  }
}