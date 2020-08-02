import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';
import { Store } from '@ngrx/store';
import { fromUserActions } from 'src/app/store/user-store/actions';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
	submitted = false;
	signUpForm = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			rePassword: ['', Validators.required],
		},
		{
			validator: this.customValidator.matchPassword('password', 'rePassword'),
		}
	);

	constructor(
		private fb: FormBuilder,
		private customValidator: CustomValidationService,
		private store: Store
	) {}

	get email() {
		return this.signUpForm.get('email');
	}
	get password() {
		return this.signUpForm.get('password');
	}
	get rePassword() {
		return this.signUpForm.get('rePassword');
	}

	onSubmit() {
		this.submitted = true;
		this.store.dispatch(fromUserActions.signUp(this.signUpForm.value));
	}
}
