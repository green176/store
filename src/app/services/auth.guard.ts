import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAuthStatus } from '../store/user-store/selectors';
import { map } from 'rxjs/operators';
import { fromUserActions } from '../store/user-store/actions';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private store: Store) {}
	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(selectAuthStatus),
			map((status) => {
				if (!status) {
					this.store.dispatch(fromUserActions.logInRedirect());
				}
				return status;
			})
		);
	}
}
