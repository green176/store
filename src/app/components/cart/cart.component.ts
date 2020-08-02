import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProductsInCart } from 'src/app/store/cart-store/selectors';
import { Observable } from 'rxjs';
import { Product } from '@models/product';
import { fromCartActions } from 'src/app/store/cart-store/actions';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
	productsInCart$: Observable<Product['id'][]>;

	constructor(private store: Store) {}

	ngOnInit() {
		this.productsInCart$ = this.store.select(selectProductsInCart);
	}

	private removeFromCart(productId: Product['id']) {
		this.store.dispatch(fromCartActions.removeFromCart({ productId }));
	}
}
