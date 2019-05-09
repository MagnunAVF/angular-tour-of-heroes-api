import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HeroDto } from './hero.dto';

@Controller('Heros')
export class HerosController {
  @Post()
  create(@Body() HeroDto: HeroDto) {
    return 'Add Hero';
  }

  @Get()
  findAll() {
    return 'All heroes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Return #${id} Hero`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() HeroDto: HeroDto) {
    return `Update #${id} Hero`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removes #${id} Hero`;
  }
}