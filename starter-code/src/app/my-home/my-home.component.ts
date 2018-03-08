import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movieArray = [];
  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movieArray = this.movies.getMovies();
  }

}
