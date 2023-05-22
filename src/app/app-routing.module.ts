import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopArticlesComponent} from "./article-lists/top-articles/top-articles.component";

const routes: Routes = [
  {path: 'top', component: TopArticlesComponent},
  {path: '', redirectTo: '/top', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
