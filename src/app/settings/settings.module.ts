import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMainComponent } from './settings-main/settings-main.component';
import { FavoriteArticlesComponent } from './favorite-articles/favorite-articles.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {SettingsRoutingModule} from "./settings-routing.module";


@NgModule({
  declarations: [
    SettingsMainComponent,
    FavoriteArticlesComponent,
    SearchComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SettingsRoutingModule,
    SharedModule,
  ]
})
export class SettingsModule { }
