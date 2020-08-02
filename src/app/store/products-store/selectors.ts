import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, PRODUCTS_FEATURE_KEY, productsAdapter } from './reducer';
import { Product } from '@models/product';
import { Category } from '@models/category';

const getProductsState = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

export const selectProductsLoaded = createSelector(
	getProductsState,
	(state) => state.loaded
);
const { selectAll } = productsAdapter.getSelectors();

export const selectAllProducts = createSelector(getProductsState, selectAll);

export const selectProductsByCategory = (uid: Category['uid']) =>
	createSelector(selectAllProducts, (products: Product[]) => {
		if (products) {
			return products.filter((product) => product.categoryUid === uid);
		}
		return null;
	});
