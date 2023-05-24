import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FavoriteArticlesComponent} from "./favorite-articles/favorite-articles.component";
import {SearchComponent} from "./search/search.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path: 'favorite', component: FavoriteArticlesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
