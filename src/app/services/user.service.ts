import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { of } from 'rxjs';
import { User } from '@models/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(public http: HttpClient) {}

	signIn(email: string, password: string) {
		return this.http.get<User & { token: string }>(
			`http://${environment.host}/sign-in?email=${email}&password=${password}`
		);
	}
	signUp(email: string, password: string, rePassword: string) {
		const body = { email, password, rePassword };
		return this.http.post<User & { token: string }>(
			`http://${environment.host}/register`,
			body
		);
	}
	changeName(firstName: string, lastName: string) {
		//TODO: fix token
		const body = { firstName, lastName, token: localStorage.getItem('token') };
		return this.http.post<User>(`http://${environment.host}/change-name`, body);
	}
	getAuthState() {
		return of(!!localStorage.getItem('token'));
	}
}
