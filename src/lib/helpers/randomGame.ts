import { redis } from '$lib/constants/redis';
import type { GameRegion } from '$lib/model/enums/gameRegion';

export const randomGame = async (region: GameRegion): Promise<string> => {
	try {
		const gameId = await redis.srandmember(region);

		if (gameId) {
			return gameId;
		}

		const gameIdsResponse = await fetch(
			`https://canisback.com/matchId/matchlist_${region.toLowerCase()}.json`
		);
		const gameIds: Array<number> = await gameIdsResponse.json();

		redis.sadd(region, ...gameIds);
		return gameIds[Math.floor(Math.random() * gameIds.length)].toString();
	} catch (e) {
		console.log(e);
	}
};