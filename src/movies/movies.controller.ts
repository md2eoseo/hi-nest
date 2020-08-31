import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `get one movie called ${id}`;
  }

  @Post()
  create() {
    return 'created movie';
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return `deleted one movie called ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `patched one movie called ${id}`;
  }
}
