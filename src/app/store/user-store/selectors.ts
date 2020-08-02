import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './reducer';
import { UserName } from '@models/user';

const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectAuthStatus = createSelector(
	getUserState,
	(state) => state.isAuthenticated
);
export const selectUserName = createSelector(
	getUserState,
	(state): UserName =>
		state.user
			? {
					firstName: state.user.firstName,
					lastName: state.user.lastName,
			  }
			: null
);
