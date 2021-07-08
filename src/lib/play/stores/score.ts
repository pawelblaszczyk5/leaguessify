import { get, writable } from 'svelte/store';

const createScoreStore = () => {
	const { subscribe, update } = writable<number>(0);

	return {
		subscribe,
		decrease: (numberToDeduct: number) => {
			update((currentScore) => currentScore - numberToDeduct);
		},
		increase: (numberToAdd: number) => {
			update((currentScore) => currentScore + numberToAdd);
		},
		checkCanSpendGivenScore: (numberToCheck: number) => {
			const currentScore = get(score);

			return currentScore >= numberToCheck;
		}
	};
};

export const score = createScoreStore();
