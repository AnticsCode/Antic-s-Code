import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Observable, Subject } from 'rxjs';
import { Article, User } from '@shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-articles-box',
  templateUrl: './user-articles-box.component.html',
  styleUrls: ['./user-articles-box.component.scss']
})

export class UserArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() user: User;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getByUser);
  }

  private checkData(): void {
    this.store.select(fromArticles.getByUserLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getByUser({id: this.user._id})
         );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetByUser());
  }

}
