import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
