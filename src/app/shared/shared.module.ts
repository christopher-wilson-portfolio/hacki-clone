import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ChipsComponent } from './chips/chips.component';
import { FavoriteArticlesComponent } from './components/favorite-articles/favorite-articles.component';

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    NavBarComponent,
    ChipsComponent,
    FavoriteArticlesComponent,
  ],
  exports: [
    NavBarComponent,
    ChipsComponent,
    CommonModule,
    FavoriteArticlesComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
