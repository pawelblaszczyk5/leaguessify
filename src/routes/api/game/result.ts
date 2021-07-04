import type { GameRegion } from '$lib/shared/model/enums/gameRegion';
import type { EndpointOutput, Request } from '@sveltejs/kit';

import { handleError } from '$lib/api/helpers/handleError';
import { getTeam } from '$lib/api/helpers/getTeam';

export const get = async (request: Request): Promise<EndpointOutput> => {
	const gameId = Number(request.query.get('gameId'));
	const gameRegion: GameRegion = request.query.get('gameRegion') as GameRegion;
	const winner = Number(request.query.get('winner'));

	try {
		const team = await getTeam(gameRegion, gameId, winner);

		return {
			status: 200,
			body: {
				result: team.win ? 'WIN' : 'LOST'
			}
		};
	} catch (e) {
		return handleError(e);
	}
};
