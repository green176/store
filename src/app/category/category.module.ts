import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
	declarations: [CategoryListComponent, CategoryComponent],
	imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
