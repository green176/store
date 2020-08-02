import { Category } from '@models/category';

export const CATEGORIES_FIXTURE: Category[] = [
	{
		icon: '',
		title: 'Apple',
		uid: 1,
		parentUid: 0,
		childs: [
			{
				icon: '',
				title: 'Macbook',
				uid: 2,
				parentUid: 1,
				childs: [
					{
						icon: '',
						title: 'Macbook Pro 13"',
						childs: [],
						uid: 7,
						parentUid: 2,
					},
					{
						icon: '',
						title: 'Macbook Pro 16"',
						childs: [],
						uid: 8,
						parentUid: 2,
					},
					{
						icon: '',
						title: 'Macbook Air',
						childs: [],
						uid: 9,
						parentUid: 2,
					},
				],
			},
			{
				icon: '',
				title: 'iPhone',
				uid: 3,
				parentUid: 1,
				childs: [
					{
						icon: '',
						title: 'iPhone SE',
						childs: [],
						uid: 10,
						parentUid: 3,
					},
					{
						icon: '',
						title: 'iPhone XR',
						childs: [],
						uid: 11,
						parentUid: 3,
					},
					{
						icon: '',
						title: 'iPhone 11',
						childs: [],
						uid: 12,
						parentUid: 3,
					},
					{
						icon: '',
						title: 'iPhone 11 Pro',
						childs: [],
						uid: 13,
						parentUid: 3,
					},
				],
			},
			{
				icon: '',
				title: 'iPad',
				uid: 4,
				parentUid: 1,
				childs: [
					{
						icon: '',
						title: 'iPad',
						uid: 14,
						parentUid: 4,
						childs: [],
					},
					{
						icon: '',
						title: 'iPad Pro',
						uid: 15,
						parentUid: 4,
						childs: [],
					},
					{
						icon: '',
						title: 'iPad Air',
						uid: 16,
						parentUid: 4,
						childs: [],
					},
					{
						icon: '',
						title: 'iPad mini',
						uid: 17,
						parentUid: 4,
						childs: [],
					},
				],
			},
			{
				icon: '',
				title: 'Apple TV',
				uid: 5,
				parentUid: 1,
				childs: [],
			},
		],
	},
	{
		icon: '',
		title: 'Sony',
		uid: 18,
		parentUid: 0,
		childs: [
			{
				icon: '',
				title: 'TV',
				uid: 19,
				parentUid: 16,
				childs: [],
			},
			{
				icon: '',
				title: 'PlayStation',
				uid: 20,
				parentUid: 16,
				childs: [],
			},
			{
				icon: '',
				title: 'Xperia',
				uid: 21,
				parentUid: 16,
				childs: [],
			},
		],
	},
];
