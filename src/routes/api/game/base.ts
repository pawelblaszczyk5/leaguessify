import type { EndpointOutput } from '@sveltejs/kit';
import type { JSONValue } from '@sveltejs/kit/types/endpoint';

import { getGameStats } from '$lib/api/helpers/getGameStats';
import { getRandomGameId } from '$lib/api/helpers/getRandomGameId';
import { getRandomRegion } from '$lib/api/helpers/getRandomRegion';
import { getBaseGameData } from '$lib/api/helpers/getBaseGameData';
import { handleError } from '$lib/api/helpers/handleError';

export const get = async (): Promise<EndpointOutput> => {
	try {
		const region = getRandomRegion();
		const gameId = await getRandomGameId(region);
		const mappedGameData = await getGameStats(region, gameId);
		const baseGameData = getBaseGameData(mappedGameData);

		return {
			status: 200,
			body: baseGameData as unknown as JSONValue
		};
	} catch (e) {
		return handleError(e);
	}
};
