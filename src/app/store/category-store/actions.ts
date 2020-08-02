import { createAction, props } from '@ngrx/store';

import { Category } from '@models/category';

export enum CategoriesActionTypes {
	LoadCategories = '[Category] Load Categories',
	LoadCategoriesSuccess = '[Category] Load Categories Success',
	LoadCategoriesFail = '[Category] Load Categories Fail',
}

export const loadCategories = createAction(CategoriesActionTypes.LoadCategories);

export const loadCategoriesSuccess = createAction(
	CategoriesActionTypes.LoadCategoriesSuccess,
	props<{ data: Category[] }>()
);

export const loadCategoriesFail = createAction(
	CategoriesActionTypes.LoadCategoriesFail,
	props<{ error: Error }>()
);

export const fromCategoryActions = {
	loadCategories,
	loadCategoriesFail,
	loadCategoriesSuccess,
};
