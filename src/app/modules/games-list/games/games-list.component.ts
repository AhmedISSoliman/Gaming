import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GamesListModel } from 'src/app/shared/models/games.model';
import { GamesService } from './../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  constructor(
    private gamesService: GamesService,
    private ngxSpinner: NgxSpinnerService,
    private route: Router
  ) { }
  gamesList!: GamesListModel[];

  listOfCategories = [
    { displayName: 'Racing', name: 'racing' },
    { displayName: 'Sports', name: 'sports' },
    { displayName: 'Social', name: 'social' },
    { displayName: 'Shooter', name: 'shooter' },
    { displayName: 'Open World', name: 'open-world' },
    { displayName: 'Zombie', name: 'zombie' },
    { displayName: 'Fantasy', name: 'fantasy' },
    { displayName: 'Action RPG', name: 'action-rpg' },
    { displayName: 'Action', name: 'action' },
    { displayName: 'Flight', name: 'flight' },
    { displayName: 'Battle Royal', name: 'battle-royal' },
  ];
  listOfSorted = [
    { displayName: 'Release Date', name: 'rating' },
    { displayName: 'Popularity', name: 'sports' },
    { displayName: 'Alphabetical', name: 'alphabetical' },
    { displayName: 'Relevance', name: 'relevance' }
  ];
  listOfplatForms = [
    { displayName: 'Browser', name: 'browser' },
    { displayName: 'PC', name: 'pc' }
  ];

  ngOnInit(): void {
    this.getAllGames()
  }
  getAllGames() {
    this.ngxSpinner.show();
    this.gamesService.getAllGames().subscribe(res => {
      this.ngxSpinner.hide();
      this.gamesList = res;
    }, err => {
      this.ngxSpinner.hide();
      console.log(err);
    })
  }
  getGamesByPlatform(platform: string) {
    this.ngxSpinner.show();
    this.gamesService.getGamesByPlatform(platform).subscribe(res => {
      this.ngxSpinner.hide();
      this.gamesList = res;
    }, err => {
      this.ngxSpinner.hide();
      console.log(err)
    })
  }
  getSortedGames(sortedName: string) {
    this.ngxSpinner.show();
    this.gamesService.getSortedGames(sortedName).subscribe(res => {
      this.ngxSpinner.hide();
      this.gamesList = res;
    }, err => {
      this.ngxSpinner.hide();
      console.log(err)
    })
  }
  getGamesByCategory(category: string) {
    this.ngxSpinner.show();
    this.gamesService.getGamesByCategory(category).subscribe(res => {
      this.ngxSpinner.hide();
      this.gamesList = res;
    }, err => {
      this.ngxSpinner.hide();
      console.log(err)
    })
  }

  getGameDetails(gameId: number) {
    this.route.navigate([`games/game-details/${gameId}`]);
  }
}
