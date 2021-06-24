import { GameRegion } from '$lib/model/enums/gameRegion';

export const randomRegion = (): GameRegion => {
	const regions = Object.values(GameRegion);

	return regions[Math.floor(Math.random() * regions.length)];
};
