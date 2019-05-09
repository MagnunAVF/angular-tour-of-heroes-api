import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Controller('Heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) { }

  @Post()
  async create(@Body() CreateHeroDto: CreateHeroDto): Promise<string> {
    this.heroesService.create(CreateHeroDto);

    return 'Hero created !'
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    var heroes = this.heroesService.findAll();

    return heroes;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Hero> {
    var hero = this.heroesService.find(Number(id));

    return hero;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateHeroDto: UpdateHeroDto): Promise<string> {
    this.heroesService.update(Number(id), UpdateHeroDto);

    return `Hero #${id} updated !`;
}

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    this.heroesService.delete(Number(id));

    return `Hero #${id} deleted !`;
  }
}