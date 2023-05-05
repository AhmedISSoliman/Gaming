import { Component, OnInit } from '@angular/core';
import { GamesListModel } from 'src/app/shared/models/games.model';
import { GamesService } from '../games-list/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularityGames!: GamesListModel[];
  limitRender!: number;
  constructor(private gamesService: GamesService) {
    this.limitRender = 6;
  }

  ngOnInit(): void {
    this.getSortedGames();
  }
  getSortedGames() {
    this.gamesService.getSortedGames('popularity').subscribe(res => {
      this.popularityGames = res
    })
  }

}
