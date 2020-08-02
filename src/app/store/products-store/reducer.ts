import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '@models/product';
import { fromProductsActions } from './actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<Product> {
	loaded: boolean;
	error?: Error;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
	// In this case this would be optional since primary key is id
	selectId: (product) => product.id,
});

export const initialState: ProductsState = productsAdapter.getInitialState({
	// Additional entity state properties
	loaded: false,
	error: null,
});

export interface ProductsPartialState {
	readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

const _reducer = createReducer(
	initialState,
	on(fromProductsActions.loadProductsSuccess, (state, { data }) => {
		return productsAdapter.setAll(data, {
			...state,
			loaded: true,
		});
	})
);

export function reducer(state: ProductsState | undefined, action: Action) {
	return _reducer(state, action);
}
