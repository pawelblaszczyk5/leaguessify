import type { EndpointOutput } from '@sveltejs/kit';
import { isCustomError } from './isCustomError';

export const handleError = (error: unknown): EndpointOutput => {
	if (isCustomError(error)) {
		return {
			status: error.status,
			body: error.message
		};
	} else {
		return {
			status: 500,
			body: 'Unexpected error occured'
		};
	}
};
