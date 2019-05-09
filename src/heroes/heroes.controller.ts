import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';

import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Controller('Heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) { }

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto) {
    var name = createHeroDto.name;
    if (!name) {
      throw new UnprocessableEntityException();
    }

    this.heroesService.create(createHeroDto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    var heroes = this.heroesService.findAll();

    return heroes;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Hero> {
    try {
      var hero = this.heroesService.find(Number(id));
    }
    catch(e) {
      throw new NotFoundException();
    }

    return hero;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto): Promise<Hero> {
    var name = updateHeroDto.name;
    if (!name) {
      throw new UnprocessableEntityException();
    }

    try {
      var hero = this.heroesService.update(Number(id), updateHeroDto);
    }
    catch(e) {
      throw new NotFoundException();
    }

    return hero;
}

  @Delete(':id')
  async remove(@Param('id') id: string){
    try {
      this.heroesService.delete(Number(id));
    }
    catch(e) {
      throw new NotFoundException();
    }
  }
}