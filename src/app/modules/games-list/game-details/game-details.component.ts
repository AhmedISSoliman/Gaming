import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GameList, GamesListModel } from './../../../shared/models/games.model';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameList!: GameList;
  gameId!: number;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor(
    private gameService: GamesService,
    private spinner: NgxSpinnerService,
    private activeRouter: ActivatedRoute
  ) {
    this.gameId = Number(this.activeRouter.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.getGameGetails();
  }
  getGameGetails() {
    this.spinner.show();
    this.gameService.getGameDetails(this.gameId).subscribe(res => {
      this.spinner.hide();
      this.gameList = res;
    })
  }
}
