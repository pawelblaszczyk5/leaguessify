import type { GameRegion } from '../model/enums/gameRegion';

import { redis } from '$lib/api/constants/redis';
import { GAME_IDS_CACHE_TIME } from '../constants/cacheTime';

export const getRandomGameId = async (region: GameRegion): Promise<number> => {
	try {
		const gameId = await redis.srandmember(region);

		if (gameId) {
			return Number(gameId);
		}

		const gameIdsResponse = await fetch(
			`https://canisback.com/matchId/matchlist_${region.toLowerCase()}.json`
		);
		const gameIds: Array<number> = await gameIdsResponse.json();

		redis.sadd(region, ...gameIds);
		redis.expire(region, GAME_IDS_CACHE_TIME);

		return gameIds[Math.floor(Math.random() * gameIds.length)];
	} catch (e) {
		console.log(e);
	}
};
