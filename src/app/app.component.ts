import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromUserActions } from './store/user-store/actions';

@Component({
	selector: 'app-root',
	template: `
		<app-header></app-header>
		<router-outlet></router-outlet>
	`,
	styles: [],
})
export class AppComponent implements OnInit {
	constructor(private store: Store) {}

	ngOnInit() {
		this.store.dispatch(fromUserActions.checkAuthStatus());
	}
}
