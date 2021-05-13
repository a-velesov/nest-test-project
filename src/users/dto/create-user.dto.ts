import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'test@test.ru', description: 'Email'})
  readonly email: string;
  @ApiProperty({example: '1q2w3e', description: 'Пароль'})
  readonly password: string;
}