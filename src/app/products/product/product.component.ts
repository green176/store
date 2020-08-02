import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/product';
import { Store } from '@ngrx/store';
import { hasProductInCart } from 'src/app/store/cart-store/selectors';
import { Observable } from 'rxjs';
import { fromCartActions } from 'src/app/store/cart-store/actions';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	isProductInCart$: Observable<boolean>;

	constructor(private store: Store) {}

	ngOnInit() {
		this.isProductInCart$ = this.store.select(hasProductInCart(this.product.id));
	}

	private addToCart() {
		this.store.dispatch(fromCartActions.addToCart({ productId: this.product.id }));
	}

	private removeFromCart() {
		this.store.dispatch(
			fromCartActions.removeFromCart({ productId: this.product.id })
		);
	}
}
