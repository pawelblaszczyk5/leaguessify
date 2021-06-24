import { redis } from '$lib/constants/redis';
import type { EndpointOutput } from '@sveltejs/kit';

export const get = async (): Promise<EndpointOutput> => {
	try {
		const test = await redis.get('test');
		if (test) {
			return {
				status: 200,
				body: {
					test
				}
			};
		} else {
			const randomNumber = Math.random();
			redis.set('test', Math.random());
			return {
				status: 200,
				body: {
					test: randomNumber
				}
			};
		}
	} catch (e) {
		console.log(e);
	}

	// const randomNumber = Math.random();
	// await redis.set('test', Math.random());
};
