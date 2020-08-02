import { createAction, props } from '@ngrx/store';

import { Product } from '@models/product';
import { Category } from '@models/category';

export enum ProductsActionTypes {
	LoadProducts = '[Product] Load Products',
	LoadProductsSuccess = '[Product] Load Products Success',
	LoadProductsFail = '[Product] Load Products Fail',
}

export const loadProducts = createAction(
	ProductsActionTypes.LoadProducts,
	props<{ categoryUid: Category['uid'] }>()
);

export const loadProductsSuccess = createAction(
	ProductsActionTypes.LoadProductsSuccess,
	props<{ data: Product[] }>()
);

export const loadProductsFail = createAction(
	ProductsActionTypes.LoadProductsFail,
	props<{ error: Error }>()
);

export const fromProductsActions = {
	loadProducts,
	loadProductsSuccess,
	loadProductsFail,
};
