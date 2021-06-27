import type { EndpointOutput } from '@sveltejs/kit';
import type { JSONValue } from '@sveltejs/kit/types/endpoint';

import { gameStats } from '$lib/api/helpers/gameStats';
import { randomGame } from '$lib/api/helpers/randomGame';
import { randomRegion } from '$lib/api/helpers/randomRegion';

export const get = async (): Promise<EndpointOutput> => {
	try {
		const region = randomRegion();
		const gameId = await randomGame(region);
		const game = await gameStats(region, gameId);

		return {
			status: 200,
			body: game as unknown as JSONValue
		};
	} catch (e) {
		return {
			status: 500,
			body: {
				error: 'test'
			}
		};
	}
};
