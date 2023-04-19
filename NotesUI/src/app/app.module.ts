import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './WebModule/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './WebModule/login/login.component';
import { SignupComponent } from './WebModule/signup/signup.component';
import { DashboardComponent } from './WebModule/dashboard/dashboard.component';
import { HomeComponent } from './WebModule/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './WebModule/notes/notes.component';
import { TodolistComponent } from './WebModule/todolist/todolist.component';
import {CommonModule} from '@angular/common';
import {JWTTokenService} from "./service/jwtdecode.service";
import {JwtModule} from "@auth0/angular-jwt";
import { TestComponent } from './test/test.component';

export function tokenGetter(){
  return localStorage.getItem("user");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    NotesComponent,
    TodolistComponent,
    TestComponent
  ],
  imports: [
    [FormsModule,BrowserModule],
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        allowedDomains:['localhost:8080'],
        authScheme: "Bearer "
      }
    })
  ],
  providers: [LoginComponent,NotesComponent,JWTTokenService],
  bootstrap: [AppComponent]
})

export class AppModule { }
