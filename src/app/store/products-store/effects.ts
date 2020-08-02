import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { ProductsService } from '@services/products.service';
import { fromProductsActions } from './actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '@models/product';
import { selectAllProducts } from './selectors';

@Injectable()
export class ProductsEffects {
	constructor(
		private actions$: Actions,
		private productsService: ProductsService,
		private store: Store<Product[]>
	) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromProductsActions.loadProducts),
			withLatestFrom(this.store.select(selectAllProducts)),
			exhaustMap(([action, products]) => {
				const hasProductsInCategory = products.filter(
					(product) => product.categoryUid === action.categoryUid
				);
				if (hasProductsInCategory.length) {
					return of(
						fromProductsActions.loadProductsSuccess({
							data: hasProductsInCategory,
						})
					);
				}
				return this.productsService
					.getProductsByCategory(action.categoryUid)
					.pipe(
						map((products) =>
							fromProductsActions.loadProductsSuccess({ data: products })
						),
						catchError((error) =>
							of(fromProductsActions.loadProductsFail({ error }))
						)
					);
			})
		)
	);
}
