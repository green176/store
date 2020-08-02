import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpResponse,
	HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CATEGORIES_FIXTURE } from '../fixture/categories.fixture';
import { PRODUCTS_FIXTURE } from '../fixture/products.fixture';
import { Category } from '@models/category';
import { Product } from '@models/product';

@Injectable({
	providedIn: 'root',
})
export class FakeBackendInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<Category[] | Product[]>,
		next: HttpHandler
	): Observable<HttpEvent<Category[] | Product[]>> {
		if (
			request.method === 'GET' &&
			request.url === 'http://localhost:4200/categories'
		) {
			return of(new HttpResponse({ status: 200, body: CATEGORIES_FIXTURE }));
		}
		if (
			request.method === 'GET' &&
			request.url === 'http://localhost:4200/products?category=1'
		) {
			return of(new HttpResponse({ status: 200, body: PRODUCTS_FIXTURE }));
		}
		next.handle(request);
	}
}
