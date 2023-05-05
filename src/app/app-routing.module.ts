import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { CurrentuserGuard } from './guards/currentuser.guard';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [CurrentuserGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'games',
        loadChildren: () => import('../app/modules/games-list/games-list.module').then((m) => m.GamesListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
