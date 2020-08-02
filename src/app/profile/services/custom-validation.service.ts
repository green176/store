import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class CustomValidationService {
	constructor() {}

	matchPassword(password: string, rePassword: string) {
		return (formGroup: FormGroup) => {
			const passwordControl = formGroup.controls[password];
			const confirmPasswordControl = formGroup.controls[rePassword];

			if (!passwordControl || !confirmPasswordControl) {
				return null;
			}

			if (
				confirmPasswordControl.errors &&
				!confirmPasswordControl.errors.passwordMismatch
			) {
				return null;
			}

			if (passwordControl.value !== confirmPasswordControl.value) {
				confirmPasswordControl.setErrors({ passwordMismatch: true });
			} else {
				confirmPasswordControl.setErrors(null);
			}
		};
	}
}
