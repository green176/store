import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, CART_FEATURE_KEY } from './reducer';
import { Product } from '@models/product';

const getCartState = createFeatureSelector<CartState>(CART_FEATURE_KEY);

export const selectProductsInCart = createSelector(getCartState, (state) => state);
export const selectProductsInCartCount = createSelector(
	getCartState,
	(state) => state.length
);

export const hasProductInCart = (productId: Product['id']) =>
	createSelector(getCartState, (state) => state.includes(productId));
