export type User = {
	firstName: string;
	lastName: string;
	email: string;
	address: UserAddress;
};

export type UserAddress = {
	city: string;
	street: string;
	house: string;
	flat: string;
};

export type UserSignUp = {
	email: string;
	password: string;
	rePassword: string;
};

export type UserSignIn = Omit<UserSignUp, 'rePassword'>;

export type UserPasswords = Omit<UserSignUp, 'email'>;

export type UserName = Pick<User, 'firstName' | 'lastName'>;
