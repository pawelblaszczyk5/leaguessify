import type { GameRegion } from '$lib/shared/model/enums/gameRegion';

import { writable } from 'svelte/store';

type GameBaseData = { id: number; region: GameRegion };

const createStoreGame = () => {
	const { subscribe, set } = writable<GameBaseData>();

	return {
		subscribe,
		setGameData: (data: GameBaseData) => {
			set(data);
		}
	};
};

export const game = createStoreGame();
