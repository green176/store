import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromUserActions } from 'src/app/store/user-store/actions';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
	submitted = false;
	authForm = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});

	constructor(private fb: FormBuilder, private store: Store) {}

	get email() {
		return this.authForm.get('email');
	}
	get password() {
		return this.authForm.get('password');
	}

	onSubmit() {
		this.submitted = true;
		this.store.dispatch(fromUserActions.signIn(this.authForm.value));
	}
}
