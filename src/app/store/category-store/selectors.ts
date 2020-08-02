import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoriesState, categoryAdapter, CATEGORIES_FEATURE_KEY } from './reducer';
import { Category } from '@models/category';

// Lookup the 'Categories' feature state managed by NgRx
const getCategoriesState = createFeatureSelector<CategoriesState>(CATEGORIES_FEATURE_KEY);
// get the selectors
const { selectIds, selectAll, selectTotal } = categoryAdapter.getSelectors();

// select the array of Categories ids
export const selectCategoriesIds = createSelector(getCategoriesState, selectIds);

// select the array of Categories
export const selectAllCategories = createSelector(getCategoriesState, selectAll);

// select the total Categories count
export const selectCategoriesCount = createSelector(getCategoriesState, selectTotal);

// select Categories loaded flag
export const selectCategoriesLoaded = createSelector(
	getCategoriesState,
	(state) => state.loaded
);

export const selectCategoriesByParentUid = (parentUid: Category['parentUid']) =>
	createSelector(selectAllCategories, (categories: Category[]) =>
		categories.filter((category) => category.parentUid === parentUid)
	);

// select Categories error
export const selectError = createSelector(getCategoriesState, (state) => state.error);
