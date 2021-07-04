let runes = require('./data/runesReforged.json');
let fs = require('fs');

const mappedRunesData = Object.fromEntries(
	runes.map((pathObject) => {
		return [
			pathObject.id,
			{
				name: pathObject.key,
				keystones: Object.fromEntries(
					pathObject.slots[0].runes.map((slotsObject) => {
						return [
							slotsObject.id,
							{
								name: slotsObject.key
							}
						];
					})
				)
			}
		];
	})
);

fs.writeFileSync('src/lib/shared/data/rune.json', JSON.stringify(mappedRunesData));
