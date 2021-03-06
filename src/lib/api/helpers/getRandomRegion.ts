import { GameRegion } from '../../shared/model/enums/gameRegion';

export const getRandomRegion = (): GameRegion => {
	const regions = Object.values(GameRegion);

	return regions[Math.floor(Math.random() * regions.length)];
};
