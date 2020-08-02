import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const productsRoutes: Routes = [
	{ path: 'product/:id', component: ProductDetailsComponent },
	{ path: 'category/:id/products', component: ProductListComponent },
];

@NgModule({
	imports: [RouterModule.forChild(productsRoutes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
