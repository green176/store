import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { AuthInterceptor } from './interceptors/auth.interceptor';

//MODULES
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { ProfileModule } from './profile/profile.module';
//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CategoriesEffects } from './store/category-store/effects';
import * as fromCategories from './store/category-store/reducer';
import { ProductsEffects } from './store/products-store/effects';
import * as fromProducts from './store/products-store/reducer';
import * as fromCart from './store/cart-store/reducer';
import * as fromUser from './store/user-store/reducer';
import { UserEffects } from './store/user-store/effects';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, CartComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ProductsModule,
		CategoryModule,
		ProfileModule,
		StoreModule.forRoot({
			[fromCategories.CATEGORIES_FEATURE_KEY]: fromCategories.reducer,
			[fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.reducer,
			[fromCart.CART_FEATURE_KEY]: fromCart.reducer,
			[fromUser.USER_FEATURE_KEY]: fromUser.reducer,
		}),
		EffectsModule.forRoot([CategoriesEffects, ProductsEffects, UserEffects]),
	],
	providers: [
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: AuthInterceptor,
		// 	multi: true,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
