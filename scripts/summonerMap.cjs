let summoners = require('./data/summoner.json');
let fs = require('fs');

const mappedSummonersData = Object.fromEntries(
	Object.entries(summoners.data).map(([summonerId, summonerObject]) => {
		return [
			summonerObject.key,
			{
				id: summonerId,
				name: summonerObject.name
			}
		];
	})
);

fs.writeFileSync('src/lib/shared/data/summoner.json', JSON.stringify(mappedSummonersData));
