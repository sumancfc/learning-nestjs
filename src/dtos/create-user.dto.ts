import { IsEmail, IsNumber, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  name: number;

  @IsEmail()
  email: string;
}

export class FindUserByIdDto {
  @IsNumberString()
  id: number;
}
