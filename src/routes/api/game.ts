import { gameStats } from '$lib/helpers/gameStats';
import { randomGame } from '$lib/helpers/randomGame';
import { randomRegion } from '$lib/helpers/randomRegion';
import type { EndpointOutput } from '@sveltejs/kit';

export const get = async (): Promise<EndpointOutput> => {
	try {
		const region = randomRegion();
		const gameId = await randomGame(region);
		console.log(await gameStats(region, gameId));
		return {
			status: 200,
			body: {
				test: 'test'
			}
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
