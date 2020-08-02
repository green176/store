import { Category } from './category';

export class Product {
	id: number;
	image: string;
	title: string;
	description: string;
	price: string;
	discount_price?: string;
	categoryUid: Category['uid'];
}
