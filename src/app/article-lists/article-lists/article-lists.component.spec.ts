import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListsComponent } from './article-lists.component';

describe('ArticleListsComponent', () => {
  let component: ArticleListsComponent;
  let fixture: ComponentFixture<ArticleListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleListsComponent]
    });
    fixture = TestBed.createComponent(ArticleListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
