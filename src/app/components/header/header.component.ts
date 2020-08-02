import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProductsInCartCount } from 'src/app/store/cart-store/selectors';
import { Observable } from 'rxjs';
import { selectAuthStatus } from 'src/app/store/user-store/selectors';
import { fromUserActions } from 'src/app/store/user-store/actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	productsInCartCount$: Observable<number>;
	isAuthenticated$: Observable<boolean>;
	constructor(private store: Store) {}

	ngOnInit() {
		this.productsInCartCount$ = this.store.pipe(select(selectProductsInCartCount));
		this.isAuthenticated$ = this.store.pipe(select(selectAuthStatus));
	}

	logout() {
		this.store.dispatch(fromUserActions.logOut());
	}
}
