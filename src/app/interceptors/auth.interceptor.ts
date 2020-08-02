import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpResponse,
	HttpErrorResponse,
	HttpEvent,
	HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
		const headers = new HttpHeaders().set(
			'API-Key',
			'api-7334d6d1-dc20-4942-b3c2-551f0c2bf496'
		);
		const authReq = req.clone({ headers });

		return next.handle(authReq).pipe(
			tap(
				(event) => {
					if (event instanceof HttpResponse) console.log('Server response');
				},
				(err) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status == 401) console.log('Unauthorized');
					}
				}
			)
		);
	}
}
