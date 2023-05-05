import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Interceptor } from './interceptors/interceptor';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { CurrentuserGuard } from './guards/currentuser.guard';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FullLayoutComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
    }),
    CarouselModule
  ],
  providers: [
    AuthGuard,
    CurrentuserGuard,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
