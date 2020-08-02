import { Action, createReducer, on } from '@ngrx/store';
import { fromUserActions } from './actions';
import { User } from '@models/user';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
	isAuthenticated: boolean;
	token: string;
	loaded: boolean;
	error?: Error;
	user: User;
}

export const initialState: UserState = {
	isAuthenticated: false,
	token: null,
	//TODO: change to null
	user: { firstName: '', lastName: '', email: '', address: null },
	error: null,
	loaded: false,
};

export interface UserPartialState {
	readonly [USER_FEATURE_KEY]: UserState;
}

const _reducer = createReducer(
	initialState,
	on(fromUserActions.signInSuccess, (state, { token }) => {
		return { ...state, isAuthenticated: true, token };
	}),
	on(fromUserActions.signInFail, (state, { error }) => {
		return {
			...state,
			error,
		};
	}),
	on(fromUserActions.signUpSuccess, (state, { token }) => {
		console.log(token);

		return { ...state, isAuthenticated: true, token };
	}),
	on(fromUserActions.signUpFail, (state, { error }) => {
		return {
			...state,
			error,
		};
	}),
	on(fromUserActions.getAuthStatus, (state, { isAuthenticated }) => ({
		...state,
		isAuthenticated,
	})),
	on(fromUserActions.logOut, () => initialState),
	on(fromUserActions.changeNameSuccess, (state, { user }) => {
		return { ...state, user };
	}),
	on(fromUserActions.changeNameFail, (state, { error }) => {
		return {
			...state,
			error,
		};
	})
);

export function reducer(state: UserState | undefined, action: Action) {
	return _reducer(state, action);
}
