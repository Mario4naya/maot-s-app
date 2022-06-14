import { MenuModule } from './../menu/menu.module';
import { MenuComponent } from './../menu/menu.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    MenuModule
  ]
})
export class LoginModule { }
