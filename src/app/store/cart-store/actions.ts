import { createAction, props } from '@ngrx/store';
import { Product } from '@models/product';

export enum CartActionTypes {
	AddToCart = '[Cart] Add to cart',
	RemoveFromCart = '[Cart] Remove from cart',
}

export const addToCart = createAction(
	CartActionTypes.AddToCart,
	props<{ productId: Product['id'] }>()
);
export const removeFromCart = createAction(
	CartActionTypes.RemoveFromCart,
	props<{ productId: Product['id'] }>()
);

export const fromCartActions = {
	addToCart,
	removeFromCart,
};
