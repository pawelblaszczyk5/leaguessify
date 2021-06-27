import type { GameRegion } from '../model/enums/gameRegion';
import type { MappedGameData } from '../model/mappedGameData';

import { redis } from '$lib/api/constants/redis';
import { GAME_STATS_CACHE_TIME } from '../constants/cacheTime';
import { riotAPI } from '../constants/riotApiUrl';
import { mapDataFromApi } from './mapDataFromApi';

export const getGameStats = async (region: GameRegion, id: number): Promise<MappedGameData> => {
	const gameJoinedId = `${region}_${id}`;

	const gameStatsDataFromRedis = await redis.get(gameJoinedId);

	if (gameStatsDataFromRedis) {
		return JSON.parse(gameStatsDataFromRedis);
	}

	const gameStatsResponse = await fetch(
		`https://${riotAPI[region]}.api.riotgames.com/lol/match/v5/matches/${gameJoinedId}`,
		{
			headers: {
				'X-Riot-Token': import.meta.env.VITE_LEAGUE_OF_LEGENDS_API_KEY
			}
		}
	);

	if (gameStatsResponse.status === 200) {
		const gameStatsData = await gameStatsResponse.json();
		const mappedGameData = mapDataFromApi(gameStatsData, id, region);

		redis.set(gameJoinedId, JSON.stringify(mappedGameData), 'EX', GAME_STATS_CACHE_TIME);
		return mappedGameData;
	} else if (gameStatsResponse.status === 404) {
		throw { status: 404, message: "Couldn't find game with given ID" };
	} else if (gameStatsResponse.status === 401) {
		throw { status: 401, message: "Couldn't authenticate to Riot API" };
	} else {
		throw { status: 500, message: 'Unexpected error occured' };
	}
};
