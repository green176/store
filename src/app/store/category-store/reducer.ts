import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Category } from '@models/category';
import { fromCategoryActions } from './actions';

export const CATEGORIES_FEATURE_KEY = 'category';

export interface CategoriesState extends EntityState<Category> {
	loaded: boolean;
	error?: Error;
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>({
	// In this case this would be optional since primary key is id
	selectId: (category) => category.uid,
});

export const initialState: CategoriesState = categoryAdapter.getInitialState({
	// Additional entity state properties
	loaded: false,
	error: null,
});

export interface CategoriesPartialState {
	readonly [CATEGORIES_FEATURE_KEY]: CategoriesState;
}

const flatten = (array: Category[]) =>
	array.reduce(
		(acc, current) =>
			current.childs.length
				? acc.concat(current, flatten(current.childs))
				: acc.concat(current),
		[]
	);

const _reducer = createReducer(
	initialState,
	on(fromCategoryActions.loadCategoriesSuccess, (state, { data }) => {
		return categoryAdapter.addAll(flatten(data), {
			...state,
			loaded: true,
		});
	}),
	on(fromCategoryActions.loadCategoriesFail, (state, { error }) => {
		return {
			...state,
			error,
		};
	})
);

export function reducer(state: CategoriesState | undefined, action: Action) {
	return _reducer(state, action);
}
