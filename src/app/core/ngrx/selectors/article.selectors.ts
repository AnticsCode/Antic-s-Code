import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '../reducers/article.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getArticlesState = createSelector(
  getAppState,
  (state: AppState) => state.articles
);

export const get = createSelector(
  getArticlesState, fromArticles.getArticles
);

export const getLoaded = createSelector(
  getArticlesState, fromArticles.getArticlesLoaded
);

export const getBySlug = createSelector(
  getArticlesState, fromArticles.getSlug
);

export const getByUser = createSelector(
  getArticlesState, fromArticles.getByUser
);

export const getByUserLoaded = createSelector(
  getArticlesState, fromArticles.getByUserLoaded
);

export const getLast = createSelector(
  getArticlesState, fromArticles.getLast
);

export const getLastAndCountLoaded = createSelector(
  getArticlesState, fromArticles.getLastAndCountLoaded
);

export const getMostLiked = createSelector(
  getArticlesState, fromArticles.getMostLiked
);

export const getMostLikedLoaded = createSelector(
  getArticlesState, fromArticles.getMostLikedLoaded
);

export const getFull = createSelector(
  getArticlesState, fromArticles.getFull
);

export const getCount = createSelector(
  getArticlesState, fromArticles.getCount
);

export const getCountLoaded = createSelector(
  getArticlesState, fromArticles.getCountLoaded
);

export const getByCategory = createSelector(
  getArticlesState, fromArticles.getByCategory
);

export const getByCategoryLoaded = createSelector(
  getArticlesState, fromArticles.getByCategoryLoaded
);

export const getByCategoryCount = createSelector(
  getArticlesState, fromArticles.getCategoryCount
);

export const getCategoryCountLoaded = createSelector(
  getArticlesState, fromArticles.getCategoryCountLoaded
);


