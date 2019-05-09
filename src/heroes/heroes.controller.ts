import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';

@Controller('Heros')
export class HerosController {
  @Post()
  create(@Body() HeroDto: CreateHeroDto) {
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
  update(@Param('id') id: string, @Body() HeroDto: UpdateHeroDto) {
    return `Update #${id} Hero`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removes #${id} Hero`;
  }
}