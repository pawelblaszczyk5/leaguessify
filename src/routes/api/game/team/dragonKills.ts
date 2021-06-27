import type { GameRegion } from '$lib/api/model/enums/gameRegion';
import type { EndpointOutput, Request } from '@sveltejs/kit';

import { handleError } from '$lib/api/helpers/handleError';
import { getTeam } from '$lib/api/helpers/getTeam';

export const get = async (request: Request): Promise<EndpointOutput> => {
	const gameId = Number(request.query.get('gameId'));
	const gameRegion: GameRegion = request.query.get('gameRegion') as GameRegion;
	const teamId = Number(request.query.get('teamId'));

	try {
		const team = await getTeam(gameRegion, gameId, teamId);

		return {
			status: 200,
			body: {
				dragonKills: team.dragonKills
			}
		};
	} catch (e) {
		return handleError(e);
	}
};
