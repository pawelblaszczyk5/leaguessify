import type { GameRegion } from '../model/enums/gameRegion';
import type { MappedGameData } from '../model/mappedGamedata';

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
	const gameStatsData = await gameStatsResponse.json();
	const mappedGameData = mapDataFromApi(gameStatsData, gameJoinedId);

	redis.set(gameJoinedId, JSON.stringify(mappedGameData), 'EX', GAME_STATS_CACHE_TIME);
	return mappedGameData;
};
