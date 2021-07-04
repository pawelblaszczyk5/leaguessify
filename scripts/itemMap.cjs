let items = require('./item.json');
let fs = require('fs');

const mappedItemData = Object.fromEntries(
	Object.entries(items.data).map(([itemId, itemObject]) => {
		return [
			itemId,
			{
				name: itemObject.name
			}
		];
	})
);

fs.writeFileSync('../src/lib/shared/data/item.json', JSON.stringify(mappedItemData));
