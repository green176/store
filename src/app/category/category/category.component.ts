import { Component, Input } from '@angular/core';
import { Category } from '@models/category';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
	@Input() title: Category['title'];
	@Input() icon: Category['icon'];
	@Input() uid: Category['uid'];
}
