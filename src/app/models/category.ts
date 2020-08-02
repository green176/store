export class Category {
	icon: string;
	title: string;
	childs: Array<Category>;
	uid: number;
	parentUid: number;
}

/*
	"icon": "https://c.dns-shop.ru/thumb/st1/fit_width/25/25/e805e9a66d0c74fcb2712ef9d47ce7b8/q100_a9172f7a3408f5119fb3803bf302f76a5ad3ac5da4f03600cb3b2af42df98a78.png",
	"subtitles": [
		{
			"url": "/catalog/17a8ea2316404e77/tovary-dlya-doma/",
			"title": "для дома"
		},
		{
			"url": "/catalog/17a8ea5816404e77/krasota-i-zdorove/",
			"title": "уход за собой"
		}
	],
	"params": [],
	"rsu": null,
	"count": 27940,
	"childs": [],
	"url": "/catalog/17a8e9b716404e77/bytovaya-texnika/",
	"title": "Бытовая техника"


{
	"count": 1138,
	"childs": [],
	"url": "/catalog/89873d5539157fd7/plity/",
	"title": "Плиты"
},
*/
