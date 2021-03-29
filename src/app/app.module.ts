import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";

import { HomeComponent } from "../home/home.component";
import { GlobalvarService } from "./globalvar.service";

//Tambahin routes
const ROUTES: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "home/:nama", component: HomeComponent }
];

@NgModule({
  //tambahin import dan declaration
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],

  declarations: [AppComponent, HelloComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
