import { GAME_STATS_CACHE_TIME } from '$lib/constants/cacheTime';
import { redis } from '$lib/constants/redis';
import { riotAPI } from '$lib/constants/riotAPI';
import type { GameRegion } from '$lib/model/enums/gameRegion';

export const gameStats = async (region: GameRegion, id: number): Promise<unknown> => {
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

	redis.set(gameJoinedId, JSON.stringify(gameStatsData), 'EX', GAME_STATS_CACHE_TIME);
	return gameStatsData;
};
