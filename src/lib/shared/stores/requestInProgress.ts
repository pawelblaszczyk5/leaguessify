import { writable } from 'svelte/store';

const createRequestInProgresStore = () => {
	const { subscribe, set } = writable<boolean>(false);

	return {
		subscribe,
		startRequest: () => set(true),
		endRequest: () => set(false)
	};
};

export const requestInProgress = createRequestInProgresStore();
