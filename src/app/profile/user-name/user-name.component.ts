import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromUserActions } from 'src/app/store/user-store/actions';
import { Store } from '@ngrx/store';
import { selectUserName } from 'src/app/store/user-store/selectors';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserName } from '@models/user';

@Component({
	selector: 'app-user-name',
	templateUrl: './user-name.component.html',
	styleUrls: ['./user-name.component.scss'],
})
export class UserNameComponent implements OnInit {
	userName$: Observable<UserName>;
	isEdit = true;
	nameForm = this.fb.group({
		firstName: [''],
		lastName: [''],
	});
	constructor(private fb: FormBuilder, private store: Store) {}

	ngOnInit() {
		this.userName$ = this.store.select(selectUserName).pipe(
			tap((state) => {
				if (state) {
					const { firstName, lastName } = state;
					if (firstName !== '' || lastName !== '') {
						this.isEdit = false;
						this.nameForm.setValue({ firstName, lastName });
					}
				}
			})
		);
	}

	toggleForm() {
		this.isEdit = !this.isEdit;
	}

	onSubmit() {
		this.isEdit = false;
		this.store.dispatch(fromUserActions.changeName(this.nameForm.value));
	}
}
