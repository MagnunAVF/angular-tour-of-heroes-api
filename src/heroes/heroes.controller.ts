import { Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';

@Controller('Heros')
export class HerosController {
  @Post()
  create() {
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
  update(@Param('id') id: string) {
    return `Update #${id} Hero`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removes #${id} Hero`;
  }
}