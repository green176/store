import { Product } from '@models/product';

export const PRODUCTS_FIXTURE: Product[] = [
	{
		id: 1,
		image:
			'https://cdn2.biggeek.ru/1/435/ea9a/10488-781mbp16touch-space-gallery1-201911.jpeg',
		title: 'MacBook Pro',
		description: 'Space Gray 2,6 GHz Core i7, 16GB, 512GB, Radeon Pro 5300M',
		price: '199000',
		discount_price: '187000',
		categoryUid: 6,
	},
	{
		id: 2,
		image:
			'https://cdn2.biggeek.ru/1/435/4422/10489-997mbp16touch-silver-gallery1-201911.jpeg',
		title: 'MacBook Pro',
		description: 'Silver 2,3 GHz Core i9, 16GB,1TB, Radeon Pro 5500M',
		price: '224000',
		categoryUid: 6,
	},
	{
		id: 3,
		image:
			'https://cdn2.biggeek.ru/1/435/230b/11174-2319075-601macbook-air-space-gray-select-201810.jpeg',
		title: 'MacBook Air',
		description: 'Space Gray 1,1 GHz, 8GB, 256Gb, Intel Iris Plus Graphics',
		price: '92000',
		categoryUid: 9,
	},
	{
		id: 4,
		image:
			'https://cdn2.biggeek.ru/1/435/5b33/11178-9989076-677macbook-air-gold-select-201810.jpeg',
		title: 'MacBook Air',
		description: 'Gold 1,1 GHz, 8GB, 512Gb, Intel Iris Plus Graphics',
		price: '122 990',
		categoryUid: 9,
	},
	{
		id: 5,
		image:
			'https://cdn2.biggeek.ru/1/435/9525/9068-2508848-607mbp13touch-space-gallery2-201807_geo_us_1.jpeg',
		title: 'MacBook Pro',
		description: 'Space Gray 1,4 GHz, 8GB, 128Gb, Intel Iris Plus Graphics 645',
		price: '106 990',
		categoryUid: 9,
	},
];
