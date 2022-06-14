import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './maot/home/home.component';
import { LoginModule } from './maot/login/login.module';
import { MenuModule } from './maot/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
