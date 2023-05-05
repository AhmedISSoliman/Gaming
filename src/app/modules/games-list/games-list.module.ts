import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GamesListComponent } from './games/games-list.component';
import { GamesListRoutingModule } from './games-list-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    GameDetailsComponent,
    GamesListComponent,
  ],
  imports: [
    CommonModule,
    GamesListRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule,
    CarouselModule
  ],
  providers: []
})
export class GamesListModule { }
