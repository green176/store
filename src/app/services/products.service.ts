import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product';
import { Category } from '@models/category';
import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	constructor(public http: HttpClient) {}

	getProductsByCategory(uid: Category['uid']) {
		return this.http.get<Product[]>(
			`http://${environment.host}/products?category=${uid}`
		);
	}
}
