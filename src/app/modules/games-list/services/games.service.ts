import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameList, GamesListModel } from 'src/app/shared/models/games.model';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/urls';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http: HttpClient
  ) { }

  getAllGames() {
    return this.http.get<GamesListModel[]>(`${environment.baseUrl}${ApiPaths.getGamesList}`);
  }
  getSortedGames(sortedName: string) {
    return this.http.get<GamesListModel[]>(`${environment.baseUrl}${ApiPaths.getSortedGames}${sortedName}`);
  }
  getGameDetails(gameId: number) {
    return this.http.get<GameList>(`${environment.baseUrl}${ApiPaths.getGameDetails}${gameId}`);
  }
  getGamesByCategory(category: string) {
    return this.http.get<GamesListModel[]>(`${environment.baseUrl}${ApiPaths.getGamesByCategory}${category}`);
  }
  getGamesByPlatform(platForm: string) {
    return this.http.get<GamesListModel[]>(`${environment.baseUrl}${ApiPaths.getGamesByPlatform}${platForm}`);
  }
}
