import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fromProductsActions } from 'src/app/store/products-store/actions';
import { selectProductsByCategory } from 'src/app/store/products-store/selectors';
import { Product } from '@models/product';
import { Category } from '@models/category';
import { fromCartActions } from 'src/app/store/cart-store/actions';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
	products$: Observable<Product[]>;
	constructor(private route: ActivatedRoute, private store: Store) {}

	ngOnInit() {
		this.products$ = this.route.paramMap.pipe(
			switchMap((params) => {
				const categoryUid: Category['uid'] = +params.get('id');
				this.store.dispatch(fromProductsActions.loadProducts({ categoryUid }));
				return this.store.pipe(select(selectProductsByCategory(categoryUid)));
			})
		);
	}
}
