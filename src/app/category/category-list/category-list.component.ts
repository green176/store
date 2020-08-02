import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@models/category';
import { select, Store } from '@ngrx/store';
import {
	selectCategoriesByParentUid,
	selectCategoriesLoaded,
} from 'src/app/store/category-store/selectors';
import { fromCategoryActions } from 'src/app/store/category-store/actions';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
	categories$: Observable<Category[]>;

	constructor(
		private route: ActivatedRoute,
		private store: Store<Category[]>,
		private router: Router
	) {}

	ngOnInit(): void {
		this.categories$ = this.route.paramMap.pipe(
			switchMap((params) => {
				this.store.dispatch(fromCategoryActions.loadCategories());
				const categoryUid: Category['uid'] = +params.get('id');
				const categories = this.store.pipe(
					select(selectCategoriesByParentUid(categoryUid))
				);
				const isLoaded = this.store.pipe(select(selectCategoriesLoaded));
				return combineLatest(categories, isLoaded).pipe(
					tap(
						([categories, isLoaded]) =>
							isLoaded &&
							!categories.length &&
							this.router.navigate(
								['/category', +params.get('id'), 'products'],
								{ skipLocationChange: true }
							)
					),
					map(([categories]) => categories)
				);
			})
		);
	}
}
