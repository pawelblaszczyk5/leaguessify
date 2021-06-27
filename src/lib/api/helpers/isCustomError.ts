import type { CustomError } from '../model/customError';

export const isCustomError = (possibleCustomError: any): possibleCustomError is CustomError => {
	return (
		typeof possibleCustomError?.status === 'number' &&
		typeof possibleCustomError?.message === 'string'
	);
};
