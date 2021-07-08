let champions = require('./data/champion.json');
let fs = require('fs');

const mapChampionId = (id) => {
	if (id === 'Fiddlesticks') {
		return 'FiddleSticks';
	}

	return id;
};

const mappedChampionData = Object.fromEntries(
	Object.entries(champions.data).map(([championId, championObject]) => {
		return [
			mapChampionId(championId),
			{
				name: championObject.name,
				title: championObject.title
			}
		];
	})
);

fs.writeFileSync('src/lib/shared/data/champion.json', JSON.stringify(mappedChampionData));
