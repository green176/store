import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CategoriesService } from '@services/categories.service';
import { fromCategoryActions, CategoriesActionTypes } from './actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Category } from '@models/category';
import { selectAllCategories } from './selectors';

type CategoryAction = {
	categoryUid: Category['uid'];
	type: CategoriesActionTypes;
};

@Injectable()
export class CategoriesEffects {
	constructor(
		private actions$: Actions,
		private categoriesService: CategoriesService,
		private store: Store<Category[]>
	) {}

	loadCategories$ = createEffect(() =>
		this.actions$.pipe(
			ofType<CategoryAction>(fromCategoryActions.loadCategories),
			withLatestFrom(this.store.select(selectAllCategories)),
			mergeMap(([action, categories]) => {
				if (categories.length) {
					return of(
						fromCategoryActions.loadCategoriesSuccess({ data: categories })
					);
				}
				return this.categoriesService.getCategories().pipe(
					map((categories) =>
						fromCategoryActions.loadCategoriesSuccess({
							data: categories,
						})
					),
					catchError((error) =>
						of(fromCategoryActions.loadCategoriesFail({ error }))
					)
				);
			})
		)
	);
}
