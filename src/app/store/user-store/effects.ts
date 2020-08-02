import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@services/user.service';
import { fromUserActions } from './actions';
import { exhaustMap, map, catchError, tap, first, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthStatus } from './selectors';

@Injectable()
export class UserEffects {
	constructor(
		private actions$: Actions,
		private userService: UserService,
		private store: Store,
		private router: Router
	) {}

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromUserActions.signIn),
			exhaustMap(({ email, password }) =>
				this.userService.signIn(email, password).pipe(
					map(({ token }) => fromUserActions.signInSuccess({ token })),
					catchError((error) => of(fromUserActions.signInFail({ error })))
				)
			)
		)
	);

	signInSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromUserActions.signInSuccess),
				tap(({ token }) => {
					localStorage.setItem('token', token);
					this.router.navigateByUrl('/');
				})
			),
		{ dispatch: false }
	);

	signUp$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromUserActions.signUp),
			exhaustMap(({ email, password, rePassword }) =>
				this.userService.signUp(email, password, rePassword).pipe(
					map((userData) =>
						fromUserActions.signUpSuccess({ token: userData.token })
					),
					catchError((error) => of(fromUserActions.signUpFail({ error })))
				)
			)
		)
	);

	changeName$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromUserActions.changeName),
			exhaustMap(({ firstName, lastName }) =>
				this.userService.changeName(firstName, lastName).pipe(
					map((user) => fromUserActions.changeNameSuccess({ user })),
					catchError((error) => of(fromUserActions.changeNameFail({ error })))
				)
			)
		)
	);

	signUpSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromUserActions.signUpSuccess),
				tap(({ token }) => {
					localStorage.setItem('token', token);
					this.router.navigateByUrl('/');
				})
			),
		{ dispatch: false }
	);

	logOut$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromUserActions.logOut),
				tap(() => {
					localStorage.removeItem('token');
					this.router.navigateByUrl('/');
				})
			),
		{ dispatch: false }
	);

	loginRedirect$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromUserActions.logInRedirect),
				tap(() => this.router.navigateByUrl('/auth'))
			),
		{ dispatch: false }
	);

	getAuthStatus$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromUserActions.checkAuthStatus),
			first(),
			withLatestFrom(this.store.select(selectAuthStatus)),
			exhaustMap(([actions, authStatus]) => {
				if (authStatus) {
					return of(
						fromUserActions.getAuthStatus({ isAuthenticated: authStatus })
					);
				}
				return this.userService
					.getAuthState()
					.pipe(
						map((isAuthenticated) =>
							fromUserActions.getAuthStatus({ isAuthenticated })
						)
					);
			})
		)
	);
}
