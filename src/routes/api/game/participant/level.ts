import type { GameRegion } from '$lib/api/model/enums/gameRegion';
import type { EndpointOutput, Request } from '@sveltejs/kit';

import { getParticipant } from '$lib/api/helpers/getParticipant';
import { handleError } from '$lib/api/helpers/handleError';

export const get = async (request: Request): Promise<EndpointOutput> => {
	const gameId = Number(request.query.get('gameId'));
	const gameRegion: GameRegion = request.query.get('gameRegion') as GameRegion;
	const participantId = Number(request.query.get('participantId'));

	try {
		const participant = await getParticipant(gameRegion, gameId, participantId);

		return {
			status: 200,
			body: {
				level: participant.championLevel
			}
		};
	} catch (e) {
		return handleError(e);
	}
};
