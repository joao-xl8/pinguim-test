import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(@Query('page') page: number) {
    return this.userService.getUsersByPage(page);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createUser(@Body() data: any) {
    return this.userService.createUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(@Param() id: number, data: any) {
    return this.userService.updateUser(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
