import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '@models/product';
import { fromCartActions } from './actions';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends Array<Product['id']> {}

export const initialState: CartState = [];

export interface CartPartialState {
	readonly [CART_FEATURE_KEY]: CartState;
}

const _reducer = createReducer(
	initialState,
	on(fromCartActions.addToCart, (state, { productId }) => {
		const exist = state.includes(productId);
		return exist ? state : [...state, productId];
	}),
	on(fromCartActions.removeFromCart, (state, { productId }) => [
		...state.filter((id) => id !== productId),
	])
);

export function reducer(state: CartState | undefined, action: Action) {
	return _reducer(state, action);
}
