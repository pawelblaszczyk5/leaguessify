import { STARTING_SCORE } from '$lib/shared/constants/startingScore';
import { get, writable } from 'svelte/store';

const createScoreStore = () => {
	const { subscribe, update, set } = writable<number>(STARTING_SCORE);

	return {
		subscribe,
		decrease: (numberToDeduct: number) => update((currentScore) => currentScore - numberToDeduct),
		increase: (numberToAdd: number) => update((currentScore) => currentScore + numberToAdd),
		checkDoesHaveGivenScore: (numberToCheck: number) => {
			const currentScore = get(score);

			return currentScore >= numberToCheck;
		},
		reset: () => set(STARTING_SCORE)
	};
};

export const score = createScoreStore();
