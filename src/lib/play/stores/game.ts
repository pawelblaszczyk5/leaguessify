import { writable } from 'svelte/store';
import type { Game } from '../model/game';

const createGameStore = () => {
	const { subscribe, update, set } = writable<Game>();

	return {
		subscribe,
		update,
		set
	};
};

export const game = createGameStore();
