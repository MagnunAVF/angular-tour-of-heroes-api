import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero';

@Injectable()
export class HeroesService {
  private readonly heroes: Hero[] = [
    { id: 1, name: 'Hero A' },
    { id: 2, name: 'Hero B' },
    { id: 3, name: 'Hero C' },
    { id: 4, name: 'Hero D' },
    { id: 5, name: 'Hero E' },
    { id: 6, name: 'Hero F' }
  ];

  create(heroDto: CreateHeroDto) {
    var newHero = <Hero> heroDto;
    newHero.id = this.generateID();

    this.heroes.push(newHero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }

  find(id: number): Hero {
    return this.selectHero(id);
  }

  // to do: improve
  update(id: number, heroDto: UpdateHeroDto) {
    var selectedHero = this.selectHero(id);
    var position = this.heroArrayPosition(id);

    selectedHero = <Hero> heroDto;
    selectedHero.id = id;

    this.heroes[position] = selectedHero;
  }

  delete(id: number) {
    delete this.heroes[id];
  }

  private generateID(): number {
    var newID: number;
    newID = this.heroes.length + 1;
    return newID;
  }

  private selectHero(id: number): Hero {
    var selectedHero: Hero;

    for (let hero of this.heroes) {
      if (hero.id === id) {
        selectedHero = hero;
      }
    }

    return selectedHero;
  }

  private heroArrayPosition(id: number): number {
    var position: number;

    for (const {hero, index} of this.heroes.map((hero, index) => ({ hero, index }))) {
      if (hero.id === id) {
        position = index;
      }
    }

    return position;
  }
}