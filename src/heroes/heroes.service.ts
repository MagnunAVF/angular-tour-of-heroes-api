import { Injectable } from '@nestjs/common';
import { Hero } from './hero.interface';

@Injectable()
export class HeroesService {
  private readonly heroes: Hero[] = [];

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }

  find(id: number) {
    return this.heroes[id];
  }

  update(id: number, hero: Hero) {
      this.heroes[id] = hero;
  }

  delete(id: number) {
       // to do
       this.heroes;
  }
}