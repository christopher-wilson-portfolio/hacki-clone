import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    ArticlePreviewComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
