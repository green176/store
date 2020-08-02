import { createAction, props } from '@ngrx/store';
import { UserName, User, UserPasswords, UserAddress } from '@models/user';

export enum UserActionTypes {
	SignIn = '[User] Sign in',
	SignInSuccess = '[User] Sign in Success',
	SignInFail = '[User] Sign in Fail',
	SignUp = '[User] Sign up',
	SignUpSuccess = '[User] Sign up Success',
	SignUpFail = '[User] Sign up Fail',
	LogOut = '[User] Log out Fail',
	checkAuthStatus = '[User] Check auth status',
	getAuthStatus = '[User] Get auth status',
	logInRedirect = '[User] Login redirect',
	ChangeName = '[User] Change name',
	ChangeNameSuccess = '[User] Change name Success',
	ChangeNameFail = '[User] Change name fail',
	ChangeEmail = '[User] Change email',
	ChangePassword = '[User] Change password',
	ChangeAddress = '[User] Change address',
}

export const signIn = createAction(
	UserActionTypes.SignIn,
	props<{ email: string; password: string }>()
);

export const signInSuccess = createAction(
	UserActionTypes.SignInSuccess,
	props<{ token: string }>()
);

export const signInFail = createAction(
	UserActionTypes.SignInFail,
	props<{ error: Error }>()
);

export const signUp = createAction(
	UserActionTypes.SignUp,
	props<{ email: string; password: string; rePassword: string }>()
);

export const signUpSuccess = createAction(
	UserActionTypes.SignUpSuccess,
	props<{ token: string }>()
);

export const signUpFail = createAction(
	UserActionTypes.SignUpFail,
	props<{ error: Error }>()
);

export const logOut = createAction(UserActionTypes.LogOut);

export const logInRedirect = createAction(UserActionTypes.logInRedirect);

export const checkAuthStatus = createAction(UserActionTypes.checkAuthStatus);

export const getAuthStatus = createAction(
	UserActionTypes.checkAuthStatus,
	props<{ isAuthenticated: boolean }>()
);

export const changeName = createAction(UserActionTypes.ChangeName, props<UserName>());
export const changeNameSuccess = createAction(
	UserActionTypes.ChangeNameSuccess,
	props<{ user: User }>()
);
export const changeNameFail = createAction(
	UserActionTypes.ChangeNameFail,
	props<{ error: Error }>()
);

export const changePassword = createAction(
	UserActionTypes.ChangePassword,
	props<UserPasswords>()
);

export const changeAddress = createAction(
	UserActionTypes.ChangeAddress,
	props<UserAddress>()
);

export const changeEmail = createAction(
	UserActionTypes.ChangeEmail,
	props<{ email: User['email'] }>()
);

export const fromUserActions = {
	signIn,
	signInSuccess,
	signInFail,
	signUp,
	signUpSuccess,
	signUpFail,
	logOut,
	getAuthStatus,
	checkAuthStatus,
	logInRedirect,
	changeName,
	changeNameSuccess,
	changeNameFail,
	changePassword,
	changeAddress,
	changeEmail,
};
