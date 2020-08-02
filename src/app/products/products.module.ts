import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
	declarations: [ProductListComponent, ProductDetailsComponent, ProductComponent],
	imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
