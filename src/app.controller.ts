import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, FindUserByIdDto } from './dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloWorld(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get(':id')
  findOne(@Param() param: FindUserByIdDto) {
    return 'This action returns a user';
  }
}
