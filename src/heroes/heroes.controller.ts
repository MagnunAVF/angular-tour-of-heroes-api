import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Controller('Heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) { }

  @Post()
  async create(@Body() CreateHeroDto: CreateHeroDto) {
    this.heroesService.create(CreateHeroDto);
  }

  @Get()
  async findAll() {
    this.heroesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.heroesService.find(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateHeroDto: UpdateHeroDto) {
    this.heroesService.update(Number(id), UpdateHeroDto);
}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.heroesService.delete(Number(id));
  }
}