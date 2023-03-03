import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookPageComponent} from "./book-page/book-page.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'book/:id', component:BookPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


