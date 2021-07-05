let runes = require('./data/runesReforged.json');
let fs = require('fs');

const mappedRunesData = Object.fromEntries(
	runes.map((pathObject) => {
		return [
			pathObject.id,
			{
				key: pathObject.key,
				name: pathObject.name,
				keystones: Object.fromEntries(
					pathObject.slots[0].runes.map((slotsObject) => {
						return [
							slotsObject.id,
							{
								key: slotsObject.key,
								name: slotsObject.name
							}
						];
					})
				)
			}
		];
	})
);

fs.writeFileSync('src/lib/shared/data/rune.json', JSON.stringify(mappedRunesData));
