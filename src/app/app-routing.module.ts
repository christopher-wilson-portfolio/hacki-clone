import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsMainComponent } from "./settings/settings-main/settings-main.component";
import {
  AskArticlesComponent,
  BestArticlesComponent,
  NewArticlesComponent,
  ShowArticlesComponent,
  TopArticlesComponent,
} from "./article-lists/article-lists/article-lists.component";

const routes: Routes = [
  {path: 'ask', component: AskArticlesComponent},
  {path: 'best', component: BestArticlesComponent},
  {path: 'new', component: NewArticlesComponent},
  {path: 'show', component: ShowArticlesComponent},
  {
    path: 'profile', component: SettingsMainComponent,
    loadChildren: () => import('./settings/settings-routing.module').then(m => m.SettingsRoutingModule)
  },
  {path: 'top', component: TopArticlesComponent},
  {path: '', redirectTo: '/top', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
