import type { EndpointOutput } from '@sveltejs/kit';

export const get = async (): Promise<EndpointOutput> => {
	console.log(import.meta.env.VITE_LEAGUE_OF_LEGENDS_API_KEY);

	return {
		status: 200,
		body: {
			test: 'test'
		}
	};
};
