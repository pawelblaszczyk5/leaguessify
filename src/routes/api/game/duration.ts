import type { GameRegion } from '$lib/shared/model/enums/gameRegion';
import type { EndpointOutput, Request } from '@sveltejs/kit';

import { handleError } from '$lib/api/helpers/handleError';
import { getGameStats } from '$lib/api/helpers/getGameStats';

export const get = async (request: Request): Promise<EndpointOutput> => {
	const gameId = Number(request.query.get('gameId'));
	const gameRegion: GameRegion = request.query.get('gameRegion') as GameRegion;

	try {
		const game = await getGameStats(gameRegion, gameId);

		return {
			status: 200,
			body: {
				duration: game.gameDuration
			}
		};
	} catch (e) {
		return handleError(e);
	}
};
