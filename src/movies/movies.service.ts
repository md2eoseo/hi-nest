import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    if (this.movies.length === 0) {
      throw new NotFoundException('There are no movies...');
    }
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find(movie => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie ID: ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }

  update(id: string, updateData) {
    this.getOne(id);
    this.movies.forEach((movie, idx) => {
      if (movie.id === +id) {
        this.movies[idx] = { ...movie, ...updateData };
      }
    });
  }
}
