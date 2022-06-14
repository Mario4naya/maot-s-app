import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations:[
    MenuComponent
  ],
  imports:[
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    MenuComponent,
  ]
})
export class MenuModule { }
