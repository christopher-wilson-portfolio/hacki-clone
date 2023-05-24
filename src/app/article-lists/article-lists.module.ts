import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleListsComponent,
  AskArticlesComponent,
  BestArticlesComponent,
  NewArticlesComponent,
  ShowArticlesComponent,
  TopArticlesComponent,
} from './article-lists/article-lists.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArticleListsComponent,
    AskArticlesComponent,
    BestArticlesComponent,
    NewArticlesComponent,
    ShowArticlesComponent,
    TopArticlesComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class ArticleListsModule {}
