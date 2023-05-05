import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GamesListComponent } from './games/games-list.component';


const routes: Routes = [
  {
    path: 'games-list',
    component: GamesListComponent,
  },
  {
    path: 'game-details/:id',
    component: GameDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesListRoutingModule { }
