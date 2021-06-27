import type { EndpointOutput } from '@sveltejs/kit';
import type { JSONValue } from '@sveltejs/kit/types/endpoint';

import { gameStats } from '$lib/api/helpers/gameStats';
import { randomGame } from '$lib/api/helpers/randomGame';
import { randomRegion } from '$lib/api/helpers/randomRegion';
import { getBaseGameData } from '$lib/api/helpers/getBaseGameData';

export const get = async (): Promise<EndpointOutput> => {
	try {
		const region = randomRegion();
		const gameId = await randomGame(region);
		const mappedGameData = await gameStats(region, gameId);
		const baseGameData = getBaseGameData(mappedGameData);

		return {
			status: 200,
			body: baseGameData as unknown as JSONValue
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
