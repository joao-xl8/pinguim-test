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
import { ImagesService } from '../service/images.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('image')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getImages(@Query('page') page: number) {
    return this.imageService.getImagesByPage(page);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getImagesById(@Param('id') id: number) {
    return this.imageService.getImagesById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createImages(@Body() data: any) {
    return this.imageService.createImages(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateImages(@Body() id: number, data: any) {
    return this.imageService.updateImages(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteImages(@Param('id') id: number) {
    return this.imageService.deleteImages(id);
  }
}
