import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('search')
  search(@Query() query) {
    return `We are searching a movie called ${query.title} in ${query.year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `get one movie called ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return `created ${movieData}`;
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return `deleted one movie called ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
