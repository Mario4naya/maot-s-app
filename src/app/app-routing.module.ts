import { HomeComponent } from './maot/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    children:[
      {
      path:'login',
      loadChildren:()=>import('./maot/login/login.module').then((m)=> m.LoginModule),
    },
    ],
  },{
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
