import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@models/category';
import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	constructor(public http: HttpClient) {}

	getCategories() {
		return this.http.get<Category[]>(`http://${environment.host}/categories`);
	}
}
