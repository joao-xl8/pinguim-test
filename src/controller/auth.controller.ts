import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );
    const user = await this.usersService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });
    const acess_token = await this.authService.generateJwt(user.id);
    return { user, acess_token };
  }
}
