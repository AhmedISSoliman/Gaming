export enum ApiPaths {
  //Auth
  Login = 'api/login',
  Register = 'api/register',
  //Games List
  getGamesList = 'api/games',
  getGamesByCategory = 'api/games?category=',
  getGameDetails = 'api/game?id=',
  getGamesByPlatform = 'api/games?platform=',
  getSortedGames = 'api/games?sort-by='
}
