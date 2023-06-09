import { Component, NgIterable, OnInit } from "@angular/core";
import {ArticlesService} from "../../shared/services/articles.service";
import {Observable} from "rxjs";
import {Story} from "../../shared/interfaces/article";

@Component({
  selector: 'app-article-lists',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class ArticleListsComponent{
  title = 'Article List';
  // articles$: Observable<Story[]>;

  constructor(private articlesService: ArticlesService) {
    // this.articles$ = this.articlesService.getTopArticles();
  }
}

@Component({
  selector: 'app-ask-articles',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class AskArticlesComponent extends ArticleListsComponent implements OnInit {
  ngOnInit() {
    //

    this.title = 'ask-articles';
  }
}

@Component({
  selector: 'app-best-articles',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class BestArticlesComponent extends ArticleListsComponent implements OnInit {
  ngOnInit() {
    //

    this.title = 'best-articles';
  }
}

@Component({
  selector: 'app-new-articles',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class NewArticlesComponent extends ArticleListsComponent implements OnInit {
  ngOnInit() {


    this.title = 'new-articles';
  }
}

@Component({
  selector: 'app-show-articles',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class ShowArticlesComponent extends ArticleListsComponent implements OnInit {
  ngOnInit() {


    this.title = 'show-articles';
  }
}

@Component({
  selector: 'app-top-articles',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.scss']
})
export class TopArticlesComponent extends ArticleListsComponent implements OnInit {
  ngOnInit() {


    this.title = 'top-articles';
  }
}
