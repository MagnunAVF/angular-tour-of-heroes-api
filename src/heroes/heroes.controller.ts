import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { HeroesService } from './heroes.service'

@Controller('Heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) { }

  @Post()
  create(@Body() HeroDto: CreateHeroDto) {
    this.heroesService.create(CreateHeroDto);
  }

  @Get()
  findAll() {
    this.heroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.heroesService.find(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() HeroDto: UpdateHeroDto) {
    this.heroesService.update(Number(id), UpdateHeroDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.heroesService.delete(Number(id));
  }
}